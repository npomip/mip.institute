const setDateOfEnrollment = (day: number, month: number): string => {
  const date = new Date(0)
  date.setDate(day)
  date.setMonth(month - 1)

  const formattedDate: string = date.toLocaleString('ru-RU', {
    day: 'numeric',
    month: 'long'
  })

  return formattedDate
}

export default setDateOfEnrollment
