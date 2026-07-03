import nodemailer from 'nodemailer'
import { env } from '../config/env.js'

function createTransporter() {
  if (!env.smtp.host || !env.smtp.user || !env.smtp.pass) {
    throw new Error('SMTP configuration is missing.')
  }

  return nodemailer.createTransport({
    host: env.smtp.host,
    port: env.smtp.port,
    secure: env.smtp.secure,
    auth: {
      user: env.smtp.user,
      pass: env.smtp.pass,
    },
  })
}

export async function sendInquiryEmail(inquiry) {
  const transporter = createTransporter()
  const subject = `New inquiry from ${inquiry.fullName}`

  await transporter.sendMail({
    from: env.mail.from,
    to: env.mail.to,
    replyTo: inquiry.email || undefined,
    subject,
    text: [
      'New website inquiry received.',
      '',
      `Full name: ${inquiry.fullName}`,
      `Phone: ${inquiry.phone}`,
      `Email: ${inquiry.email || 'Not provided'}`,
      `Interested country: ${inquiry.interestedCountry || 'Not provided'}`,
      `Last qualification: ${inquiry.lastQualification || 'Not provided'}`,
      '',
      'Message:',
      inquiry.message,
    ].join('\n'),
    html: `
      <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.6;">
        <h2 style="color: #0f766e;">New Website Inquiry</h2>
        <p><strong>Full name:</strong> ${inquiry.fullName}</p>
        <p><strong>Phone:</strong> ${inquiry.phone}</p>
        <p><strong>Email:</strong> ${inquiry.email || 'Not provided'}</p>
        <p><strong>Interested country:</strong> ${inquiry.interestedCountry || 'Not provided'}</p>
        <p><strong>Last qualification:</strong> ${inquiry.lastQualification || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${inquiry.message.replace(/\n/g, '<br />')}</p>
      </div>
    `,
  })
}
