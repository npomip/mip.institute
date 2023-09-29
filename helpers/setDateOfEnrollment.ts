const setDateOfEnrollment = (day: number, month: number): string => {

const dateItem = new Date()
const selectorDate = (item) => {
  switch (true) {

    case (item < new Date(2023, 8, 30)) :
      return new Date(2023, 8, 29).toLocaleString('ru-RU', {
        day: 'numeric',
        month: 'long'
      })
      case (item < new Date(2023, 9, 5)) :
      return new Date(2022, 9, 4).toLocaleString('ru-RU', {
        day: 'numeric',
        month: 'long'
      })

    case (item < new Date(2023, 9, 19)) :
      return new Date(2023, 9, 18).toLocaleString('ru-RU', {
        day: 'numeric',
        month: 'long'
      })

  }
}

  return selectorDate(dateItem)
}

export default setDateOfEnrollment
