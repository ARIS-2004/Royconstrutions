import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: ['http://localhost:3000', 'https://royconstrutions.vercel.app'] }));
app.use(express.json());

// Outlook SMTP transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.office365.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    ciphers: 'SSLv3',
  },
});

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  try {
    await transporter.sendMail({
      from: `"Roy Constructions Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Enquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #B8965A; border-bottom: 2px solid #B8965A; padding-bottom: 8px;">
            New Contact Form Submission
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #666; width: 120px;"><strong>Name</strong></td>
              <td style="padding: 10px 0; color: #1A1A1A;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #666;"><strong>Email</strong></td>
              <td style="padding: 10px 0; color: #1A1A1A;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 10px 0; color: #666;"><strong>Phone</strong></td>
              <td style="padding: 10px 0; color: #1A1A1A;">${phone}</td>
            </tr>` : ''}
            <tr>
              <td style="padding: 10px 0; color: #666; vertical-align: top;"><strong>Message</strong></td>
              <td style="padding: 10px 0; color: #1A1A1A; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
          <p style="color: #999; font-size: 12px; margin-top: 24px; border-top: 1px solid #eee; padding-top: 12px;">
            Sent from the Roy Constructions website contact form.
          </p>
        </div>
      `,
    });

    res.json({ success: true, message: 'Thank you! We will be in touch shortly.' });
  } catch (err) {
    console.error('[Mailer Error]', err);
    res.status(500).json({ error: 'Failed to send email. Please try again.' });
  }
});

app.listen(PORT, () => {
  console.log(`Roy Constructions API → http://localhost:${PORT}`);
});
