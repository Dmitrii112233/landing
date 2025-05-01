import nodemailer from 'nodemailer';
import axios from 'axios';
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New message from ${name}`,
      text: `Email: ${email}\nMessage: ${message}`,
    });
    await axios.post(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
      chat_id: process.env.TELEGRAM_CHAT_ID,
      text: `New message from ${name}\nEmail: ${email}\n${message}`,
    });
    res.status(200).json({ success: true });
  }
}
