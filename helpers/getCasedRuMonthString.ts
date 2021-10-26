const getCasedRuYearString = (months: number) => {
  const num = months % 12

  if (num === 1) return `${months} Месяц`

  if (num > 1 && num < 5) return `${months} Месяца`

  if (num === 0 || num >= 5) return `${months} Месяцев`

  return ''
}

export default getCasedRuYearString
