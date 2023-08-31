const setDateOfEnrollment = (day: number, month: number): string => {

const dateItem = new Date()
const selectorDate = (item) => {
  switch (true) {

    case (item < new Date(2023, 8, 8)) :
      return new Date(2022, 8, 7).toLocaleString('ru-RU', {
        day: 'numeric',
        month: 'long'
      })
      case (item < new Date(2023, 8, 22)) :
      return new Date(2022, 8, 21).toLocaleString('ru-RU', {
        day: 'numeric',
        month: 'long'
      })

    case (item < new Date(2023, 8, 30)) :
      return new Date(2023, 8, 29).toLocaleString('ru-RU', {
        day: 'numeric',
        month: 'long'
      })

  }
}

  return selectorDate(dateItem)
}

export default setDateOfEnrollment
