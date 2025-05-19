import { Mojis } from './kaomoji'

export default function getKaomoji() {
  const moji = Object.values(Mojis).flatMap(i => i)
  const result = `${moji[Math.floor(Math.random() * moji.length)]}`
  return result
}
