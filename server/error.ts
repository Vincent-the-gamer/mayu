import type { ILogObj } from 'tslog'
import { Logger } from 'tslog'

const logger: Logger<ILogObj> = new Logger()

export default defineNitroErrorHandler((error, event) => {
  setResponseHeader(event, 'Content-Type', 'text/plain')
  logger.error(`Error: ${error.stack}`)
  return send(event, `[custom error handler] ${error.stack}`)
})