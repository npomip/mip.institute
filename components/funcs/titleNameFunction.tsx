const titleName = item => {
  switch (item) {
    case '/courses':
      return <>Курсы повышения квалификации для психологов</>
    case '/professions':
      return (
        <>
          Психология. Профессиональная переподготовка
        </>
      )
    case '/professions/detskaya-psihologiya':
      return (
        <>
          Детская психология. Профессиональная переподготовка
        </>
      )
    case '/professions/dietologiya-i-nutriciologiya':
      return (
        <>
          Диетология и нутрициология. Профессиональная переподготовка
        </>
      )
    case '/professions/klinicheskaya-psihologiya':
      return (
        <>
          Клиническая психология. Профессиональная переподготовка
        </>
      )
    case '/professions/konsultirovanie':
      return (
        <>
          Психологическое консультирование. Профессиональная
          переподготовка
        </>
      )
    case '/professions/obshaya-psihologiya':
      return (
        <>
          Общая психология. Профессиональная переподготовка
        </>
      )
    case '/professions/organizacionnaya-psihologiya':
      return (
        <>
          Организационная психология. Профессиональная переподготовка
        </>
      )
    case '/professions/psihoterapiya':
      return (
        <>
          Психотерапия. Профессиональная переподготовка
        </>
      )
    case '/programs':
      return <>Курсы по психологии</>
    case '/programs/detskaya-psihologiya':
      return <>Курсы по детской психологии</>
    case '/programs/konsultirovanie':
      return <>Курсы психологического консультирования</>
    case '/programs/obshaya-psihologiya':
      return <>Курсы по общей психологии</>
    case '/programs/organizacionnaya-psihologiya':
      return <>Курсы по организационной психологии</>
    case '/programs/psihoterapiya':
      return <>Курсы психотерапии</>
    case '/courses/detskaya-psihologiya':
      return (
        <>
          Детская психология. Повышение квалификации
        </>
      )
    case '/courses/konsultirovanie':
      return (
        <>
          Психологическое консультирование. Повышение квалификации
        </>
      )
    case '/courses/obshaya-psihologiya':
      return (
        <>
          Общая психология. Повышение квалификации
        </>
      )
    case '/courses/organizacionnaya-psihologiya':
      return (
        <>
          Организационная психология. Повышение квалификации
        </>
      )
    case '/courses/psihoterapiya':
      return (
        <>
          Психологическое консультирование. Повышение квалификации
        </>
      )
    case '/programs/dietologiya-i-nutriciologiya':
      return (
        <>
          Курсы
        
          по диетологии и нутрициологии
        </>
      )
    case '/programs/klinicheskaya-psihologiya':
      return (
        <>
          Курсы клинической психологии
        </>
      )
    case '/programs/konsultirovanie?filter=popular':
      return <>Популярные курсы по психологии</>

    case '/courses?filter=popular':
      return <>Популярные курсы по психологии</>
    case '/programs?filter=popular':
      return <>Популярные курсы по психологии</>
    case '/professions?filter=popular':
      return <>Популярные курсы по психологии</>

    case '/courses?opened=true':
      return <>Курсы повышения квалификации для психологов</>
    case '/programs?opened=true':
      return <>Курсы по психологии</>
    case '/professions?opened=true':
      return <>Психология. Профессиональная переподготовка</>

    // popular programs
    case '/programs/dietologiya-i-nutriciologiya?filter=popular':
      return <>Популярные курсы по психологии</>
    case '/programs/organizacionnaya-psihologiya?filter=popular':
      return <>Популярные курсы по психологии</>
    case '/programs/klinicheskaya-psihologiya?filter=popular':
      return <>Популярные курсы по психологии</>
    case '/programs/konsultirovanie?filter=popular':
      return <>Популярные курсы по психологии</>
    case '/programs/obshaya-psihologiya?filter=popular':
      return <>Популярные курсы по психологии</>
    case '/programs/psihoterapiya?filter=popular':
      return <>Популярные курсы по психологии</>
    case '/programs/detskaya-psihologiya?filter=popular':
      return <>Популярные курсы по психологии</>

    // popular professions
    case '/professions/dietologiya-i-nutriciologiya?filter=popular':
      return <>Популярные курсы по психологии</>
    case '/professions/organizacionnaya-psihologiya?filter=popular':
      return <>Популярные курсы по психологии</>
    case '/professions/klinicheskaya-psihologiya?filter=popular':
      return <>Популярные курсы по психологии</>
    case '/professions/konsultirovanie?filter=popular':
      return (
        <>
          Психологическое консультирование. Профессиональная
          переподготовка
        </>
      )
    case '/professions/obshaya-psihologiya?filter=popular':
      return <>Популярные курсы по психологии</>
    case '/professions/psihoterapiya?filter=popular':
      return <>Популярные курсы по психологии</>
    case '/professions/detskaya-psihologiya?filter=popular':
      return <>Популярные курсы по психологии</>

    // popular courses
    case '/courses/detskaya-psihologiya?filter=popular':
      return <>Популярные курсы по психологии</>
    case '/courses/psihoterapiya?filter=popular':
      return <>Популярные курсы по психологии</>
    case '/courses/konsultirovanie?filter=popular':
      return <>Популярные курсы по психологии</>
    case '/courses/organizacionnaya-psihologiya?filter=popular':
      return <>Популярные курсы по психологии</>
    case '/courses/obshaya-psihologiya?filter=popular':
      return <>Популярные курсы по психологии</>

    // opened programs
    case '/programs/dietologiya-i-nutriciologiya?opened=true':
      return (
        <>
          Курсы по диетологии и нутрициологии
        </>
      )
    case '/programs/organizacionnaya-psihologiya?opened=true':
      return <>Курсы по организационной психологии</>
    case '/programs/klinicheskaya-psihologiya?opened=true':
      return (
        <>
          Курсы клинической психологии
        </>
      )
    case '/programs/konsultirovanie?opened=true':
      return <>Курсы психологического консультирования</>
    case '/programs/obshaya-psihologiya?opened=true':
      return <>Курсы по общей психологии</>
    case '/programs/psihoterapiya?opened=true':
      return <>Курсы психотерапии</>
    case '/programs/detskaya-psihologiya?opened=true':
      return <>Курсы по детской психологии</>

    // opened professions
    case '/professions/dietologiya-i-nutriciologiya?opened=true':
      return (
        <>
          Диетология и нутрициология. Профессиональная переподготовка
        </>
      )
    case '/professions/organizacionnaya-psihologiya?opened=true':
      return (
        <>
          Организационная психология. Профессиональная переподготовка
        </>
      )
    case '/professions/klinicheskaya-psihologiya?opened=true':
      return (
        <>
          Клиническая психология. Профессиональная переподготовка
        </>
      )
    case '/professions/konsultirovanie?opened=true':
      return (
        <>
          Психологическое консультирование. Профессиональная
          переподготовка
        </>
      )
    case '/professions/obshaya-psihologiya?opened=true':
      return (
        <>
          Общая психология. Профессиональная переподготовка
        </>
      )
    case '/professions/psihoterapiya?opened=true':
      return (
        <>
          Психологическое консультирование. Профессиональная
          переподготовка
        </>
      )
    case '/professions/detskaya-psihologiya?opened=true':
      return (
        <>
          Детская психология. Профессиональная переподготовка
        </>
      )

    // popular courses
    case '/courses/detskaya-psihologiya?opened=true':
      return (
        <>
          Детская психология. Повышение квалификации
        </>
      )
    case '/courses/psihoterapiya?opened=true':
      return (
        <>
          Психологическое консультирование. Повышение квалификации
        </>
      )
    case '/courses/konsultirovanie?opened=true':
      return (
        <>
          Психологическое консультирование. Повышение квалификации
        </>
      )
    case '/courses/organizacionnaya-psihologiya?opened=true':
      return (
        <>
          Организационная психология. Повышение квалификации
        </>
      )
    case '/courses/obshaya-psihologiya?opened=true':
      return (
        <>
          Общая психология. Повышение квалификации
        </>
      )

    default:
      return 'Наши программы'
  }
}

export default titleName
