import { routes } from "../config"

const list = [
    {
      id: 1,
      label: 'Дополнительное образование',
      href: routes.front.programs,
      programType: 'null'
    },
    {
      id: 1,
      label: 'Профессиональная переподготовка',
      href: routes.front.professions,
      programType: 'profession'
    },
    {
      id: 1,
      label: 'Повышение квалификации',
      href: routes.front.courses,
      programType: 'course'
    }
  ]

export default list