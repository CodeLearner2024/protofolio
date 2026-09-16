import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Basic server-side validation
    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      return Response.json({ error: 'All fields are required.' }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    // Configure Nodemailer transporter using environment variables
    // Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS in your .env.local
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587', 10),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email to Eric (notification of new contact)
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: 'ndihokubwayoeric26@gmail.com',
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <!DOCTYPE html>
        <html lang="fr">
        <head><meta charset="UTF-8"></head>
        <body style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 0; background: #f7f9fc;">
          <div style="background: #1B3A6B; padding: 32px 40px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 1.4rem; letter-spacing: -0.02em;">
              Eric<span style="color: #00A8A8;">.</span>dev
            </h1>
            <p style="color: rgba(255,255,255,0.6); margin: 8px 0 0; font-size: 0.85rem;">Nouveau message via le portfolio</p>
          </div>
          <div style="background: white; padding: 40px; border: 1px solid #E2E8F0; border-top: none;">
            <h2 style="color: #1A1A2E; font-size: 1.1rem; margin: 0 0 24px; font-weight: 600;">${subject}</h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 28px;">
              <tr>
                <td style="padding: 10px 0; color: #718096; font-size: 0.85rem; width: 100px; vertical-align: top;">Nom</td>
                <td style="padding: 10px 0; color: #1A1A2E; font-weight: 600; font-size: 0.95rem;">${escapeHtml(name)}</td>
              </tr>
              <tr style="border-top: 1px solid #EEF2F7;">
                <td style="padding: 10px 0; color: #718096; font-size: 0.85rem; vertical-align: top;">Email</td>
                <td style="padding: 10px 0;">
                  <a href="mailto:${escapeHtml(email)}" style="color: #2E5FA3; text-decoration: none; font-size: 0.95rem;">${escapeHtml(email)}</a>
                </td>
              </tr>
            </table>
            <div style="background: #F7F9FC; border-left: 3px solid #00A8A8; border-radius: 0 8px 8px 0; padding: 20px 24px;">
              <p style="color: #4A5568; line-height: 1.75; margin: 0; font-size: 0.95rem; white-space: pre-wrap;">${escapeHtml(message)}</p>
            </div>
          </div>
          <div style="background: #F7F9FC; padding: 20px 40px; text-align: center; border: 1px solid #E2E8F0; border-top: none; border-radius: 0 0 8px 8px;">
            <p style="color: #A0AEC0; font-size: 0.78rem; margin: 0;">
              Message reçu via le portfolio — eric-ndihokubwayo.dev
            </p>
          </div>
        </body>
        </html>
      `,
    });

    // Auto-reply to the sender
    await transporter.sendMail({
      from: `"Eric NDIHOKUBWAYO" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `Re: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html lang="fr">
        <head><meta charset="UTF-8"></head>
        <body style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 0; background: #f7f9fc;">
          <div style="background: #1B3A6B; padding: 32px 40px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 1.4rem; letter-spacing: -0.02em;">
              Eric<span style="color: #00A8A8;">.</span>dev
            </h1>
          </div>
          <div style="background: white; padding: 40px; border: 1px solid #E2E8F0; border-top: none;">
            <p style="color: #1A1A2E; font-size: 1rem; margin: 0 0 16px;">Bonjour ${escapeHtml(name)},</p>
            <p style="color: #4A5568; line-height: 1.75; margin: 0 0 16px;">
              Merci pour votre message ! Je l'ai bien reçu et je vous répondrai dans les plus brefs délais.
            </p>
            <p style="color: #4A5568; line-height: 1.75; margin: 0 0 24px;">
              Thank you for reaching out! I have received your message and will get back to you as soon as possible.
            </p>
            <div style="background: #F7F9FC; border-radius: 8px; padding: 16px 20px; border: 1px solid #E2E8F0;">
              <p style="color: #718096; font-size: 0.85rem; margin: 0 0 6px;">Votre message :</p>
              <p style="color: #4A5568; font-size: 0.9rem; margin: 0; white-space: pre-wrap;">${escapeHtml(message)}</p>
            </div>
          </div>
          <div style="background: #F7F9FC; padding: 20px 40px; border: 1px solid #E2E8F0; border-top: none; border-radius: 0 0 8px 8px;">
            <p style="color: #A0AEC0; font-size: 0.78rem; margin: 0; text-align: center;">
              Eric NDIHOKUBWAYO — Analyste Programmeur / Développeur Full-Stack<br>
              Bujumbura, Burundi · ndihokubwayoeric26@gmail.com
            </p>
          </div>
        </body>
        </html>
      `,
    });

    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Contact API error:', error);
    return Response.json({ error: 'Internal server error.' }, { status: 500 });
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
