import { sendPaymentNotificationEmail } from '@/lib/mailer';

export const runtime = 'nodejs';

export async function POST(request) {
  try {
    const data = await request.json();
    
    // E-posta içeriğini oluştur
    const subject = `Yeni Başvuru: ${data.fullname} - ${data.occupation || 'Belirtilmedi'}`;
    
    const html = `
      <div style="font-family: sans-serif; padding: 20px; color: #333; line-height: 1.6;">
        <h2 style="color: #0070f3; border-bottom: 2px solid #0070f3; padding-bottom: 10px;">Yeni Başvuru Detayları</h2>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr style="background: #f9f9f9;">
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; width: 200px;">Ad Soyad:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${data.fullname}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Telefon:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${data.phone}</td>
          </tr>
          <tr style="background: #f9f9f9;">
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">E-posta:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${data.email}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Gitme Sebebi:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${data.reason}</td>
          </tr>
          <tr style="background: #f9f9f9;">
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Sektör:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${data.sector}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">İş Tecrübesi:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${data.experience}</td>
          </tr>
          <tr style="background: #f9f9f9;">
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Uzmanlık/Unvan:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${data.occupation}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Eğitim Durumu:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${data.education}</td>
          </tr>
          <tr style="background: #f9f9f9;">
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Almanca Seviyesi:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${data.lang}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Bütçe:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${data.budget}</td>
          </tr>
          <tr style="background: #f9f9f9;">
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Hedeflenen Tarih:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${data.timing}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Pasaport:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${data.passport}</td>
          </tr>
          <tr style="background: #f9f9f9;">
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Vize Reddi:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${data.refusal}</td>
          </tr>
        </table>
        
        <div style="margin-top: 30px; padding: 15px; background: #fff8e1; border-radius: 8px; border: 1px solid #ffe082;">
          <h3 style="margin-top: 0;">Hedefler ve Notlar:</h3>
          <p>${data.goals || 'Not bırakılmadı.'}</p>
        </div>
      </div>
    `;

    const text = `
      Yeni Başvuru: ${data.fullname}
      Telefon: ${data.phone}
      E-posta: ${data.email}
      Meslek: ${data.occupation}
      Sektör: ${data.sector}
      Tecrübe: ${data.experience}
      Bütçe: ${data.budget}
      Eğitim: ${data.education}
      Almanca: ${data.lang}
      Pasaport: ${data.passport}
      Hedef: ${data.timing}
      Notlar: ${data.goals}
    `;

    await sendPaymentNotificationEmail({ subject, html, text });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Lead submission error:', error);
    return Response.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
