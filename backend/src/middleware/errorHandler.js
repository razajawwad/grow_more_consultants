import { ZodError } from 'zod'

export function errorHandler(error, _req, res, _next) {
  if (error instanceof ZodError) {
    return res.status(422).json({
      success: false,
      message: 'Validation failed.',
      errors: error.issues.map((issue) => ({
        field: issue.path.join('.'),
        message: issue.message,
      })),
    })
  }

  console.error(error)

  return res.status(error.statusCode || 500).json({
    success: false,
    message: error.message || 'Internal server error.',
  })
}
