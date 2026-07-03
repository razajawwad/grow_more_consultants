import 'dotenv/config'

export const env = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: Number(process.env.PORT || 5000),
  clientOrigin: process.env.CLIENT_ORIGIN || 'http://127.0.0.1:5173',
  apiPrefix: process.env.API_PREFIX || '/api/v1',
  smtp: {
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === 'true',
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  mail: {
    from: process.env.MAIL_FROM || 'Grow More Consultants <info.gmcs.pk@gmail.com>',
    to: process.env.MAIL_TO || 'info.gmcs.pk@gmail.com',
  },
}
