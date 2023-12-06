const setDateOfEnrollment = (day: number, month: number): string => {

  const dateItem = new Date()
  const selectorDate = (item) => {
    switch (true) {
  
      case (item < new Date(2023, 10, 30)) :
        return new Date(2023, 10, 29).toLocaleString('ru-RU', {
          day: 'numeric',
          month: 'long'
        })

        case (item < new Date(2023, 11, 6)) :
        return new Date(2023, 11, 5).toLocaleString('ru-RU', {
          day: 'numeric',
          month: 'long'
        })

        case (item < new Date(2023, 11, 15)) :
        return new Date(2023, 11, 14).toLocaleString('ru-RU', {
          day: 'numeric',
          month: 'long'
        })
        
        case (item < new Date(2023, 11, 20)) :
        return new Date(2023, 11, 19).toLocaleString('ru-RU', {
          day: 'numeric',
          month: 'long'
        })

        case (item < new Date(2023, 11, 27)) :
        return new Date(2023, 11, 26).toLocaleString('ru-RU', {
          day: 'numeric',
          month: 'long'
        })
      
        case (item < new Date(2024, 0, 17)) :
        return new Date(2024, 0, 16).toLocaleString('ru-RU', {
          day: 'numeric',
          month: 'long'
        })

        case (item < new Date(2024, 0, 25)) :
        return new Date(2024, 0, 24).toLocaleString('ru-RU', {
          day: 'numeric',
          month: 'long'
        })

        case (item < new Date(2024, 0, 31)) :
        return new Date(2024, 0, 30).toLocaleString('ru-RU', {
          day: 'numeric',
          month: 'long'
        })
  
    }

  }
  
    return selectorDate(dateItem)
  }
  
  export default setDateOfEnrollment
  