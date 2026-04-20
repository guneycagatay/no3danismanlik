const nodemailer = require('nodemailer');
require('dotenv').config({ path: '.env.local' });

async function testSMTP() {
    console.log("Testing SMTP with:", process.env.SMTP_USER);
    
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: true,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    try {
        await transporter.verify();
        console.log("✅ SMTP Connection Successful!");
    } catch (error) {
        console.error("❌ SMTP Connection Failed:", error);
    }
}

testSMTP();
