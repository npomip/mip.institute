const setDateOfEnrollment = (): string => {
  const dateItem = new Date()
  const selectorDate = item => {
    switch (true) {
      
      case item < new Date(2024, 2, 6):
        return new Date(2024, 2, 5).toLocaleString('ru-RU', {
          day: 'numeric',
          month: 'long'
        })

      case item < new Date(2024, 2, 13):
        return new Date(2024, 2, 12).toLocaleString('ru-RU', {
          day: 'numeric',
          month: 'long'
        })

      case item < new Date(2024, 2, 20):
        return new Date(2024, 2, 19).toLocaleString('ru-RU', {
          day: 'numeric',
          month: 'long'
        })

      case item < new Date(2024, 2, 27):
        return new Date(2024, 2, 26).toLocaleString('ru-RU', {
          day: 'numeric',
          month: 'long'
        })

      case item < new Date(2024, 2, 30):
        return new Date(2024, 2, 29).toLocaleString('ru-RU', {
          day: 'numeric',
          month: 'long'
        })
    }
  }

  return selectorDate(dateItem)
}

export default setDateOfEnrollment
