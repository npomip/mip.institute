const setDateOfEnrollment = (): string => {
  const dateItem = new Date()
  const selectorDate = item => {
    switch (true) {
      case item < new Date(2024, 4, 1):
        return new Date(2024, 3, 30).toLocaleString('ru-RU', {
          day: 'numeric',
          month: 'long'
        })

      case item < new Date(2024, 4, 8):
        return new Date(2024, 4, 7).toLocaleString('ru-RU', {
          day: 'numeric',
          month: 'long'
        })

      case item < new Date(2024, 4, 15):
        return new Date(2024, 4, 14).toLocaleString('ru-RU', {
          day: 'numeric',
          month: 'long'
        })

      case item < new Date(2024, 4, 22):
        return new Date(2024, 4, 21).toLocaleString('ru-RU', {
          day: 'numeric',
          month: 'long'
        })

      case item < new Date(2024, 4, 29):
        return new Date(2024, 4, 28).toLocaleString('ru-RU', {
          day: 'numeric',
          month: 'long'
        })

      case item < new Date(2024, 5, 5):
        return new Date(2024, 5, 4).toLocaleString('ru-RU', {
          day: 'numeric',
          month: 'long'
        })
    }
  }

  return selectorDate(dateItem)
}

export default setDateOfEnrollment
