import { remoteRunner } from '../utils/remoteCodeRunner'

export default eventHandler(async (event) => {
  const { lang, code }: any = getQuery(event)
  const { stdout, stderr } = await remoteRunner(lang, code)

  return {
    stdout,
    stderr,
  }
})
