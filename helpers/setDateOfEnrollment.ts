const setDateOfEnrollment = (day: number, month: number): string => {

  const dateItem = new Date()
  const selectorDate = (item) => {
    switch (true) {
  
      case (item < new Date(2023, 9, 19)) :
        return new Date(2023, 9, 18).toLocaleString('ru-RU', {
          day: 'numeric',
          month: 'long'
        })

        case (item < new Date(2023, 9, 30)) :
        return new Date(2023, 9, 29).toLocaleString('ru-RU', {
          day: 'numeric',
          month: 'long'
        })
        
        case (item < new Date(2023, 10, 9)) :
        return new Date(2023, 10, 8).toLocaleString('ru-RU', {
          day: 'numeric',
          month: 'long'
        })

        case (item < new Date(2023, 10, 22)) :
        return new Date(2023, 10, 21).toLocaleString('ru-RU', {
          day: 'numeric',
          month: 'long'
        })
      
        case (item < new Date(2023, 10, 30)) :
        return new Date(2023, 10, 29).toLocaleString('ru-RU', {
          day: 'numeric',
          month: 'long'
        })
  
    }

  }
  
    return selectorDate(dateItem)
  }
  
  export default setDateOfEnrollment
  