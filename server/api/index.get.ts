import getKaomoji from '../utils/kaomoji'

export default eventHandler((event) => {
  const { env } = useRuntimeConfig(event)

  return {
    code: 200,
    env,
    kaomoji: getKaomoji(),
  }
})
