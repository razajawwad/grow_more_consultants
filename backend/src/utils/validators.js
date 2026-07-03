import { z } from 'zod'

export const inquirySchema = z.object({
  fullName: z.string().trim().min(2, 'Full name is required.').max(80),
  phone: z.string().trim().min(7, 'Phone number is required.').max(20),
  email: z.email('A valid email is required.').optional().or(z.literal('')),
  interestedCountry: z.string().trim().min(2).max(80).optional().or(z.literal('')),
  lastQualification: z.string().trim().min(2).max(80).optional().or(z.literal('')),
  message: z.string().trim().min(10, 'Message must be at least 10 characters.').max(1000),
})
