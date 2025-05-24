import type { ILogObj } from 'tslog'
import { Logger } from 'tslog'

const logger: Logger<ILogObj> = new Logger()

export default defineEventHandler((event) => {
  logger.info(`Request: method=${event.method}, path=${event.path}`)
})