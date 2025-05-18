import getKaomoji from "../utils/kaomoji"

export default eventHandler(() => {
  return {
    code: 200,
    kaomoji: getKaomoji(),
  }
})