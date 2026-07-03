import { inquirySchema } from '../utils/validators.js'

export function createInquiry(req, res) {
  const inquiry = inquirySchema.parse(req.body)

  res.status(201).json({
    success: true,
    message: 'Inquiry received successfully.',
    data: {
      inquiry,
    },
  })
}
