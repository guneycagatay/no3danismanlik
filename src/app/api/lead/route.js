import { sendPaymentNotificationEmail } from '@/lib/mailer';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request) {
  try {
    const data = await request.json();
    
    // RÖNTGEN MODU: Vercel hangi isimleri görüyor?
    const allEnvKeys = Object.keys(process.env).filter(key => key.includes('SMTP') || key.includes('EMAIL'));
    const requiredVars = ['SMTP_HOST', 'SMTP_USER', 'SMTP_PASS'];
    const missingVars = requiredVars.filter(v => !process.env[v]);
    
    if (missingVars.length > 0) {
      return Response.json({ 
        success: false, 
        error: `Vercel bu değişkenleri bulamıyor: ${missingVars.join(', ')}`,
        details: `Vercel'de mevcut olan ilgili anahtarlar: ${allEnvKeys.join(', ') || 'HİÇBİRİ BULUNAMADI'}`,
        suggestion: 'Lütfen Vercel panelinde isimlerin sonunda boşluk kalıp kalmadığını ve "Production" kutusunun işaretli olduğunu kontrol edin.'
      }, { status: 500 });
    }
    
    // E-posta içeriğini oluştur
    const subject = `Yeni Başvuru: ${data.fullname}`;
    
    const html = `
      <div style="font-family: sans-serif; padding: 20px; color: #333; line-height: 1.6;">
        <h2 style="color: #0070f3; border-bottom: 2px solid #0070f3; padding-bottom: 10px;">Yeni Başvuru Detayları</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr style="background: #f9f9f9;"><td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; width: 200px;">Ad Soyad:</td><td style="padding: 10px; border: 1px solid #ddd;">${data.fullname}</td></tr>
          <tr><td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Telefon:</td><td style="padding: 10px; border: 1px solid #ddd;">${data.phone}</td></tr>
          <tr style="background: #f9f9f9;"><td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">E-posta:</td><td style="padding: 10px; border: 1px solid #ddd;">${data.email}</td></tr>
          <tr><td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Gitme Sebebi:</td><td style="padding: 10px; border: 1px solid #ddd;">${data.reason}</td></tr>
          <tr style="background: #f9f9f9;"><td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Sektör:</td><td style="padding: 10px; border: 1px solid #ddd;">${data.sector}</td></tr>
          <tr><td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Uzmanlık/Unvan:</td><td style="padding: 10px; border: 1px solid #ddd;">${data.occupation}</td></tr>
          <tr style="background: #f9f9f9;"><td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Bütçe:</td><td style="padding: 10px; border: 1px solid #ddd;">${data.budget}</td></tr>
        </table>
        <div style="margin-top: 30px; padding: 15px; background: #fff8e1; border-radius: 8px; border: 1px solid #ffe082;">
          <h3 style="margin-top: 0;">Notlar:</h3><p>${data.goals || 'Not bırakılmadı.'}</p>
        </div>
      </div>
    `;

    const text = `Yeni Başvuru: ${data.fullname}\nTelefon: ${data.phone}\nE-posta: ${data.email}\nBütçe: ${data.budget}`;

    await sendPaymentNotificationEmail({ subject, html, text });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Lead submission error:', error);
    return Response.json({ 
      success: false, 
      error: error.message || 'Bilinmeyen bir hata oluştu',
      details: error.code || 'No code'
    }, { status: 500 });
  }
}
