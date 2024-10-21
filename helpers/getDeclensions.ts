const getDeclension = (
  num: number,
  singular: string,
  dual: string,
  plural: string
): string => {
  const absNum = Math.abs(num) % 100
  const lastDigit = absNum % 10

  if (absNum > 10 && absNum < 20) {
    return plural
  } else if (lastDigit > 1 && lastDigit < 5) {
    return dual
  } else if (lastDigit === 1) {
    return singular
  } else {
    return plural
  }
}

const declensionForDays = (num: number) =>
  getDeclension(num, 'день', 'дня', 'дней')
const declensionForHours = (num: number) =>
  getDeclension(num, 'час', 'часа', 'часов')
const declensionForMinutes = (num: number) =>
  getDeclension(num, 'минута', 'минуты', 'минут')
const declensionForSeconds = (num: number) =>
  getDeclension(num, 'секунда', 'секунды', 'секунд')

export {
  declensionForDays,
  declensionForHours,
  declensionForMinutes,
  declensionForSeconds
}
