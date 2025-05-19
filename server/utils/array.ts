export function randomPick<T>(array: T[]): T {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

export function filterFromArray<T>(array: T[], toRemove: T[]): T[] {
  return array.filter(i => !toRemove.includes(i))
}
