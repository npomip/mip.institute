const getCasedRuYearString = (months: number) => {
  const num = Math.floor(Number(months) / 12)

  if (num === 1) return `${num} год`

  if (num > 1 && num < 5) return `${num} года`

  if (num >= 5) return `${num} лет`

  return ''
}

export default getCasedRuYearString
