const setDateOfEnrollment = (): string => {
  const dateItem = new Date()
  const selectorDate = item => {
    switch (true) {
      case item < new Date(2024, 5, 27):
        return new Date(2024, 5, 26).toLocaleString('ru-RU', {
          day: 'numeric',
          month: 'long'
        })
      case item < new Date(2024, 5, 30):
        return new Date(2024, 5, 29).toLocaleString('ru-RU', {
          day: 'numeric',
          month: 'long'
        })
      case item < new Date(2024, 6, 1):
        return new Date(2024, 5, 30).toLocaleString('ru-RU', {
          day: 'numeric',
          month: 'long'
        })

      case item < new Date(2024, 6, 4):
        return new Date(2024, 6, 3).toLocaleString('ru-RU', {
          day: 'numeric',
          month: 'long'
        })
      case item < new Date(2024, 6, 4):
        return new Date(2024, 6, 3).toLocaleString('ru-RU', {
          day: 'numeric',
          month: 'long'
        })
      case item < new Date(2024, 6, 11):
        return new Date(2024, 6, 10).toLocaleString('ru-RU', {
          day: 'numeric',
          month: 'long'
        })
      case item < new Date(2024, 6, 18):
        return new Date(2024, 6, 17).toLocaleString('ru-RU', {
          day: 'numeric',
          month: 'long'
        })
      case item < new Date(2024, 6, 25):
        return new Date(2024, 6, 24).toLocaleString('ru-RU', {
          day: 'numeric',
          month: 'long'
        })
      case item < new Date(2024, 7, 1):
        return new Date(2024, 6, 31).toLocaleString('ru-RU', {
          day: 'numeric',
          month: 'long'
        })
    }
  }

  return selectorDate(dateItem)
}

export default setDateOfEnrollment
