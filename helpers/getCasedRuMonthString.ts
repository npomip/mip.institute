const getCasedRuYearString = (months: number) => {
  const num = months % 12

  if (num === 1) return `${num} месяц`

  if (num > 1 && num < 5) return `${num} месяца`

  if (num >= 5) return `${num} месяцев`

  return ''
}

export default getCasedRuYearString
