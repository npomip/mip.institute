import { routes } from "../config"

const list = [
    {
      id: 1,
      label: 'Дополнительное образование',
      href: routes.front.programs,
      programType: 'null',
      hoverSelect: true
    },
    {
      id: 2,
      label: 'Профессиональная переподготовка',
      href: routes.front.professions,
      programType: 'profession',
      hoverSelect: true
    },
    {
      id: 3,
      label: 'Повышение квалификации',
      href: routes.front.courses,
      programType: 'course',
      hoverSelect: true
    },
    {
      id: 4,
      label: 'Бакалавриат',
      href: routes.front.bachelors,
      programType: 'bachelor',
      hoverSelect: false
    },
    {
      id: 5,
      label: 'Практическая подготовка',
      href: routes.front.practicalTrainings,
      programType: 'practicalTraining',
      hoverSelect: false
    }
    ,
    {
      id: 6,
      label: 'Курсы',
      href: routes.front.shortTerm,
      programType: 'shortTerm',
      hoverSelect: true
    }
  ]

export default list