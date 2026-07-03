import { env } from './config/env.js'
import { createApp } from './app.js'

const app = createApp()

app.listen(env.port, () => {
  console.log(`Grow More Consultants API running on port ${env.port}`)
})
