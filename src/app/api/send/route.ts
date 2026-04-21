import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { type, data } = body;

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: process.env.SMTP_SECURE === "true", // 465 için true, 587 için false
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
            connectionTimeout: 10000, // Zaman aşımını biraz daha artırdım (10sn)
            greetingTimeout: 10000,
            socketTimeout: 10000,
            tls: {
                rejectUnauthorized: false, // Sertifika hatalarını es geç
                minVersion: 'TLSv1.2'
            },
            debug: true, // Vercel loglarında daha fazla detay görmek için
            logger: true
        });

        // Construct HTML Table for data
        const dataRows = Object.entries(data)
            .map(([key, value]) => `
                <tr>
                    <td style="padding: 10px; border: 1px solid #eee; font-weight: bold; width: 150px; text-transform: uppercase; font-size: 12px; color: #666;">${key}</td>
                    <td style="padding: 10px; border: 1px solid #eee; color: #333;">${value}</td>
                </tr>
            `).join("");

        const emailHtml = `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
                <div style="background: #111; padding: 30px; text-align: center; border-bottom: 4px solid #C5A059;">
                    <h1 style="color: #fff; margin: 0; font-size: 24px; letter-spacing: 2px;">No3 DANIŞMANLIK</h1>
                    <p style="color: #C5A059; margin: 5px 0 0 0; font-size: 12px; font-weight: bold; text-transform: uppercase;">YENİ ${type === 'appointment' ? 'RANDEVU TALEBİ' : 'UYGUNLUK TESTİ'}</p>
                </div>
                <div style="padding: 40px;">
                    <p style="font-size: 16px; color: #333; margin-top: 0;">Sayın Yetkili,</p>
                    <p style="font-size: 14px; color: #666; line-height: 1.6;">Web siteniz üzerinden yeni bir ${type === 'appointment' ? 'randevu kaydı oluşturuldu' : 'uygunluk testi tamamlandı'}. Detaylar aşağıdadır:</p>
                    
                    <table style="width: 100%; border-collapse: collapse; margin-top: 25px;">
                        ${dataRows}
                    </table>

                    <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; text-align: center;">
                        <p style="font-size: 12px; color: #999;">Bu email otomatik olarak No3 Danışmanlık web sitesinden gönderilmiştir.</p>
                    </div>
                </div>
            </div>
        `;

        await transporter.sendMail({
            from: `"No3 Web Form" <${process.env.SMTP_USER}>`,
            to: process.env.NOTIFY_TO_EMAIL, // Updated name from screenshot
            subject: `Yeni ${type === 'appointment' ? 'Randevu' : 'Uygunluk Testi'}: ${data.name || 'Bilinmeyen Kullanıcı'}`,
            html: emailHtml,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Email API Error:", error);
        return NextResponse.json({ success: false, error: "Email gönderilemedi." }, { status: 500 });
    }
}
