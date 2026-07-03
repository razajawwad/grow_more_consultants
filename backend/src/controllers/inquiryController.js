import { inquirySchema } from '../utils/validators.js'
import { sendInquiryEmail } from '../services/mailService.js'

export async function createInquiry(req, res) {
  const inquiry = inquirySchema.parse(req.body)

  await sendInquiryEmail(inquiry)

  res.status(201).json({
    success: true,
    message: 'Inquiry sent successfully.',
  })
}
