const titleName = item => {
  switch (item) {
    case '/courses':
      return <>Курсы повышения квалификации для психологов</>
    case '/professions':
      return (
        <>
          Психология. <br /> Профессиональная переподготовка
        </>
      )
    case '/professions/detskaya-psihologiya':
      return (
        <>
          Детская психология. <br /> Профессиональная переподготовка
        </>
      )
    case '/professions/dietologiya-i-nutriciologiya':
      return (
        <>
          Диетология и нутрициология. <br /> Профессиональная переподготовка
        </>
      )
    case '/professions/klinicheskaya-psihologiya':
      return (
        <>
          Клиническая психология. <br /> Профессиональная переподготовка
        </>
      )
    case '/professions/konsultirovanie':
      return (
        <>
          Психологическое консультирование. <br /> Профессиональная
          переподготовка
        </>
      )
    case '/professions/obshaya-psihologiya':
      return (
        <>
          Общая психология. <br /> Профессиональная переподготовка
        </>
      )
    case '/professions/organizacionnaya-psihologiya':
      return (
        <>
          Организационная психология. <br /> Профессиональная переподготовка
        </>
      )
    case '/professions/psihoterapiya':
      return (
        <>
          Психотерапия. <br /> Профессиональная переподготовка
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
          Детская психология. <br /> Повышение квалификации
        </>
      )
    case '/courses/konsultirovanie':
      return (
        <>
          Психологическое консультирование. <br /> Повышение квалификации
        </>
      )
    case '/courses/obshaya-psihologiya':
      return (
        <>
          Общая психология. <br /> Повышение квалификации
        </>
      )
    case '/courses/organizacionnaya-psihologiya':
      return (
        <>
          Организационная психология. <br /> Повышение квалификации
        </>
      )
    case '/courses/psihoterapiya':
      return (
        <>
          Психологическое консультирование. <br /> Повышение квалификации
        </>
      )
    case '/programs/dietologiya-i-nutriciologiya':
      return (
        <>
          Курсы
          <br />
          по диетологии и нутрициологии
        </>
      )
    case '/programs/klinicheskaya-psihologiya':
      return (
        <>
          Курсы <br /> клинической психологии
        </>
      )
      case '/programs/konsultirovanie?filter=popular':
      return (
        <>
          Популярные курсы
        </>
      )

      case '/courses?filter=popular':
      return (
        <>
          Популярные курсы
        </>
      )
      case '/programs?filter=popular':
      return (
        <>
          Популярные курсы
        </>
      )
      case '/professions?filter=popular':
      return (
        <>
          Популярные курсы
        </>
      )

      case '/courses?opened=true':
      return (
        <>
          Курсы повышения квалификации для психологов
        </>
      )
      case '/programs?opened=true':
      return (
        <>
          Курсы по психологии
        </>
      )
      case '/professions?opened=true':
      return (
        <>
          Психология. Профессиональная переподготовка
        </>
      )

      // popular programs
      case '/programs/dietologiya-i-nutriciologiya?filter=popular':
      return (
        <>
          Популярные курсы
        </>
      )
      case '/programs/organizacionnaya-psihologiya?filter=popular':
      return (
        <>
          Популярные курсы
        </>
      )
      case '/programs/klinicheskaya-psihologiya?filter=popular':
      return (
        <>
          Популярные курсы
        </>
      )
      case '/programs/konsultirovanie?filter=popular':
      return (
        <>
          Популярные курсы
        </>
      )
      case '/programs/obshaya-psihologiya?filter=popular':
      return (
        <>
          Популярные курсы
        </>
      )
      case '/programs/psihoterapiya?filter=popular':
      return (
        <>
          Популярные курсы
        </>
      )
      case '/programs/detskaya-psihologiya?filter=popular':
      return (
        <>
          Популярные курсы
        </>
      )

      // popular professions
      case '/professions/dietologiya-i-nutriciologiya?filter=popular':
      return (
        <>
          Популярные курсы
        </>
      )
      case '/professions/organizacionnaya-psihologiya?filter=popular':
      return (
        <>
          Популярные курсы
        </>
      )
      case '/professions/klinicheskaya-psihologiya?filter=popular':
      return (
        <>
          Популярные курсы
        </>
      )
      case '/professions/konsultirovanie?filter=popular':
      return (
        <>
          Психологическое консультирование. <br /> Профессиональная
          переподготовка
        </>
      )
      case '/professions/obshaya-psihologiya?filter=popular':
      return (
        <>
          Популярные курсы
        </>
      )
      case '/professions/psihoterapiya?filter=popular':
      return (
        <>
          Популярные курсы
        </>
      )
      case '/professions/detskaya-psihologiya?filter=popular':
      return (
        <>
          Популярные курсы
        </>
      )

      // popular courses
      case '/professions/detskaya-psihologiya?filter=popular':
      return (
        <>
          Популярные курсы
        </>
      )
      case '/professions/psihoterapiya?filter=popular':
      return (
        <>
          Популярные курсы
        </>
      )
      case '/professions/konsultirovanie?filter=popular':
      return (
        <>
          Популярные курсы
        </>
      )
      case '/professions/organizacionnaya-psihologiya?filter=popular':
      return (
        <>
          Популярные курсы
        </>
      )
      case '/professions/obshaya-psihologiya?filter=popular':
      return (
        <>
          Популярные курсы
        </>
      )

       // opened programs
       case '/programs/dietologiya-i-nutriciologiya?opened=true':
        return (
          <>
            Курсы
          <br />
          по диетологии и нутрициологии
          </>
        )
        case '/programs/organizacionnaya-psihologiya?opened=true':
        return (
          <>Курсы по организационной психологии</>
        )
        case '/programs/klinicheskaya-psihologiya?opened=true':
        return (
          <>
            Курсы <br /> клинической психологии
          </>
        )
        case '/programs/konsultirovanie?opened=true':
        return (
          <>Курсы психологического консультирования</>
        )
        case '/programs/obshaya-psihologiya?opened=true':
        return (
          <>Курсы по общей психологии</>
        )
        case '/programs/psihoterapiya?opened=true':
        return (
          <>Курсы психотерапии</>
        )
        case '/programs/detskaya-psihologiya?opened=true':
        return (
          <>Курсы по детской психологии</>
        )
  
        // opened professions
        case '/professions/dietologiya-i-nutriciologiya?opened=true':
        return (
          <>
            Диетология и нутрициология. <br /> Профессиональная переподготовка
          </>
        )
        case '/professions/organizacionnaya-psihologiya?opened=true':
        return (
          <>
            Организационная психология. <br /> Профессиональная переподготовка
          </>
        )
        case '/professions/klinicheskaya-psihologiya?opened=true':
        return (
          <>
            Клиническая психология. <br /> Профессиональная переподготовка
          </>
        )
        case '/professions/konsultirovanie?opened=true':
        return (
          <>
            Психологическое консультирование. <br /> Профессиональная переподготовка
          </>
        )
        case '/professions/obshaya-psihologiya?opened=true':
        return (
          <>
            Общая психология. <br /> Профессиональная переподготовка

          </>
        )
        case '/professions/psihoterapiya?opened=true':
        return (
          <>
            Психологическое консультирование. <br /> Профессиональная переподготовка
          </>
        )
        case '/professions/detskaya-psihologiya?opened=true':
        return (
          <>
            Детская психология. <br /> Профессиональная переподготовка
          </>
        )
  
        // popular courses
        case '/courses/detskaya-psihologiya?opened=true':
        return (
          <>
            Детская психология. <br /> Повышение квалификации
          </>
        )
        case '/courses/psihoterapiya?opened=true':
        return (
          <>
            Психологическое консультирование. <br /> Повышение квалификации
          </>
        )
        case '/courses/konsultirovanie?opened=true':
        return (
          <>
            Психологическое консультирование. <br /> Повышение квалификации
          </>
        )
        case '/courses/organizacionnaya-psihologiya?opened=true':
        return (
          <>
            Организационная психология. <br /> Повышение квалификации
          </>
        )
        case '/courses/obshaya-psihologiya?opened=true':
        return (
          <>
            Общая психология. <br /> Повышение квалификации
          </>
        )

    default:
      return 'Наши программы'
  }
}

export default titleName
