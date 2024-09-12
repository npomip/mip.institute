import { routes } from "../config"

const list = [
    {
      id: 1,
      label: 'Дополнительное образование',
      href: routes.front.programs,
      programType: 'null'
    },
    {
      id: 2,
      label: 'Профессиональная переподготовка',
      href: routes.front.professions,
      programType: 'profession'
    },
    {
      id: 3,
      label: 'Повышение квалификации',
      href: routes.front.courses,
      programType: 'course'
    },
    {
      id: 4,
      label: 'Высшее образование',
      href: routes.front.bachelors,
      programType: 'bachelor'
    },
    {
      id: 5,
      label: 'Практические навыки',
      href: routes.front.practicalTrainings,
      programType: 'practicalTraining'
    }
  ]

export default list