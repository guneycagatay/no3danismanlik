import nodemailer from 'nodemailer';

function getSmtpConfig() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || '587');
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  return {
    host,
    port,
    secure: process.env.SMTP_SECURE === 'true' || port === 465,
    auth: { user, pass }
  };
}

export async function sendPaymentNotificationEmail({ subject, html, text }) {
  const smtp = getSmtpConfig();
  if (!smtp) {
    throw new Error('SMTP ayarları eksik. SMTP_HOST, SMTP_USER ve SMTP_PASS tanımlayın.');
  }

  const to = process.env.NOTIFY_TO_EMAIL || process.env.SMTP_USER;
  const from = process.env.FROM_EMAIL || process.env.SMTP_USER;

  const transporter = nodemailer.createTransport(smtp);
  await transporter.sendMail({
    from,
    to,
    subject,
    text,
    html
  });
}
