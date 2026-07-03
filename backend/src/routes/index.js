import { Router } from 'express'
import { healthRouter } from './healthRoutes.js'
import { inquiryRouter } from './inquiryRoutes.js'

export const apiRouter = Router()

apiRouter.use('/health', healthRouter)
apiRouter.use('/inquiries', inquiryRouter)
