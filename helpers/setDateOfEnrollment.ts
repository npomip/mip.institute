const setDateOfEnrollment = (day: number, month: number): string => {

const dateItem = new Date()
const selectorDate = (item) => {
  switch (true) {

    case (item < new Date(2023, 6, 29)) :
      return new Date(2022, 6, 28).toLocaleString('ru-RU', {
        day: 'numeric',
        month: 'long'
      })
      case (item < new Date(2023, 7, 1)) :
      return new Date(2022, 6, 31).toLocaleString('ru-RU', {
        day: 'numeric',
        month: 'long'
      })

    case (item < new Date(2023, 7, 9)) :
      return new Date(2023, 7, 8).toLocaleString('ru-RU', {
        day: 'numeric',
        month: 'long'
      })

    case (item < new Date(2023, 7, 18)) :
      return new Date(2023, 7, 17).toLocaleString('ru-RU', {
        day: 'numeric',
        month: 'long'
      })

    case (item < new Date(2023, 8, 1)) :
      return new Date(2023, 7, 31).toLocaleString('ru-RU', {
        day: 'numeric',
        month: 'long'
      })

    case (item < new Date(2023, 8, 8)) :
      return new Date(2023, 8, 7).toLocaleString('ru-RU', {
        day: 'numeric',
        month: 'long'
      })

    case (item < new Date(2023, 8, 22)) :
      return new Date(2023, 8, 21).toLocaleString('ru-RU', {
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
