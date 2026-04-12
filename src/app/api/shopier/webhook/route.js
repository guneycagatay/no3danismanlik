import crypto from 'node:crypto';
import { sendPaymentNotificationEmail } from '@/lib/mailer';

export const runtime = 'nodejs';

function parseHeaderValues(signatureHeader) {
  if (!signatureHeader) return [];

  const values = [signatureHeader.trim()];
  signatureHeader.split(',').forEach((part) => {
    const value = part.includes('=') ? part.split('=').slice(1).join('=').trim() : part.trim();
    if (value) values.push(value);
  });

  return [...new Set(values)];
}

function verifySignature({ rawBody, signatureHeader, timestampHeader, secret }) {
  if (!secret) {
    return false;
  }

  const signatures = parseHeaderValues(signatureHeader);
  if (signatures.length === 0) return false;

  const payloadCandidates = [rawBody];
  if (timestampHeader) {
    payloadCandidates.push(`${timestampHeader}.${rawBody}`);
  }

  const expected = [];
  payloadCandidates.forEach((payload) => {
    const digestBuffer = crypto.createHmac('sha256', secret).update(payload).digest();
    expected.push(digestBuffer.toString('hex'));
    expected.push(digestBuffer.toString('base64'));
  });

  return signatures.some((incoming) =>
    expected.some((candidate) => {
      const incomingBuffer = Buffer.from(incoming);
      const candidateBuffer = Buffer.from(candidate);
      if (incomingBuffer.length !== candidateBuffer.length) return false;
      return crypto.timingSafeEqual(incomingBuffer, candidateBuffer);
    })
  );
}

function buildMailContent({ eventType, order }) {
  const orderId = order?.id || '-';
  const amount = order?.totals?.total || '-';
  const currency = order?.currency || '-';
  const paymentStatus = order?.paymentStatus || '-';
  const buyerEmail = order?.shippingInfo?.email || order?.billingInfo?.email || '-';
  const buyerPhone = order?.shippingInfo?.phone || order?.billingInfo?.phone || '-';
  const lineItems = Array.isArray(order?.lineItems)
    ? order.lineItems.map((item) => `${item?.title || 'Ürün'} x ${item?.quantity || 1}`).join(', ')
    : '-';

  const subject = `Shopier ödeme bildirimi: ${orderId}`;
  const text = [
    `Event: ${eventType}`,
    `Order ID: ${orderId}`,
    `Tutar: ${amount} ${currency}`,
    `Ödeme durumu: ${paymentStatus}`,
    `Alıcı e-posta: ${buyerEmail}`,
    `Alıcı telefon: ${buyerPhone}`,
    `Ürünler: ${lineItems}`
  ].join('\n');

  const html = `
    <h2>Shopier Ödeme Bildirimi</h2>
    <p><strong>Event:</strong> ${eventType}</p>
    <p><strong>Order ID:</strong> ${orderId}</p>
    <p><strong>Tutar:</strong> ${amount} ${currency}</p>
    <p><strong>Ödeme durumu:</strong> ${paymentStatus}</p>
    <p><strong>Alıcı e-posta:</strong> ${buyerEmail}</p>
    <p><strong>Alıcı telefon:</strong> ${buyerPhone}</p>
    <p><strong>Ürünler:</strong> ${lineItems}</p>
  `;

  return { subject, text, html };
}

export async function POST(request) {
  const rawBody = await request.text();
  const signatureHeader = request.headers.get('shopier-signature');
  const timestampHeader = request.headers.get('shopier-timestamp');
  const eventType = request.headers.get('shopier-event') || 'unknown';
  const secret = process.env.SHOPIER_WEBHOOK_SECRET;

  const isValid = verifySignature({ rawBody, signatureHeader, timestampHeader, secret });
  if (!isValid) {
    return new Response(JSON.stringify({ ok: false, error: 'invalid_signature' }), { status: 401 });
  }

  let payload = {};
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return new Response(JSON.stringify({ ok: false, error: 'invalid_json' }), { status: 400 });
  }

  const isPaidOrderEvent =
    eventType === 'order.created' &&
    (!payload?.paymentStatus || payload.paymentStatus === 'paid');

  if (isPaidOrderEvent) {
    const mailContent = buildMailContent({ eventType, order: payload });
    await sendPaymentNotificationEmail(mailContent);
  }

  return Response.json({ ok: true });
}
