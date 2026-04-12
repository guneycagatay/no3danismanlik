import { sendPaymentNotificationEmail } from '@/lib/mailer';
import { PACKAGE_CATALOG, getServerShopierLinkByPackageId } from '@/lib/packageCatalog';

export const runtime = 'nodejs';

function badRequest(message) {
  return new Response(JSON.stringify({ ok: false, error: message }), { status: 400 });
}

export async function POST(request) {
  let body = {};
  try {
    body = await request.json();
  } catch {
    return badRequest('invalid_json');
  }

  const { packageId, fullName, email, phone, appointmentDate, appointmentTime, note } = body;

  if (!packageId || !PACKAGE_CATALOG[packageId]) return badRequest('invalid_package');
  if (!fullName || !email || !phone || !appointmentDate || !appointmentTime) return badRequest('missing_fields');

  const redirectUrl = getServerShopierLinkByPackageId(packageId);
  if (!redirectUrl) return badRequest('shopier_url_missing');

  const selectedPackage = PACKAGE_CATALOG[packageId];
  const subject = `Yeni satın alma talebi: ${selectedPackage.title}`;
  const text = [
    `Paket: ${selectedPackage.title}`,
    `Fiyat: ${selectedPackage.price}`,
    `Ad Soyad: ${fullName}`,
    `E-posta: ${email}`,
    `Telefon: ${phone}`,
    `Randevu tarihi: ${appointmentDate}`,
    `Randevu saati: ${appointmentTime}`,
    `Not: ${note || '-'}`
  ].join('\n');

  const html = `
    <h2>Yeni Satın Alma Talebi</h2>
    <p><strong>Paket:</strong> ${selectedPackage.title}</p>
    <p><strong>Fiyat:</strong> ${selectedPackage.price}</p>
    <p><strong>Ad Soyad:</strong> ${fullName}</p>
    <p><strong>E-posta:</strong> ${email}</p>
    <p><strong>Telefon:</strong> ${phone}</p>
    <p><strong>Randevu tarihi:</strong> ${appointmentDate}</p>
    <p><strong>Randevu saati:</strong> ${appointmentTime}</p>
    <p><strong>Not:</strong> ${note || '-'}</p>
  `;

  await sendPaymentNotificationEmail({ subject, text, html });

  return Response.json({
    ok: true,
    redirectUrl
  });
}
