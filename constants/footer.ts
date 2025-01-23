import { routes } from '../config'

const staticLinks = [
  {
    id: 0,
    val: 'Курсы',
    href: routes.front.courses
  },
  {
    id: 1,
    val: 'Профессии',
    href: routes.front.professions
  },
  {
    id: 2,
    val: 'Высшее образование (Бакалавриат)',
    href: routes.front.bachelors
  },
  {
    id: 3,
    val: 'Практическая подготовка',
    href: routes.front.practicalTrainings
  },
  {
    id: 4,
    val: 'Вебинары',
    href: routes.front.webinars
  },
  {
    id: 5,
    val: 'Преподаватели',
    href: routes.front.teachers
  },
  {
    id: 6,
    val: 'Отзывы',
    href: routes.front.reviews
  },
  {
    id: 7,
    val: 'Главная',
    href: routes.front.home
  },
  {
    id: 8,
    val: 'Об институте',
    href: routes.front.about
  },
  {
    id: 9,
    val: 'Сведения об образовательной организации',
    href: routes.front.svedenCommon
  },
  {
    id: 10,
    val: 'Информация о правилах использования материала',
    href: routes.front.regulation
  },
  {
    id: 11,
    val: 'Контакты',
    href: routes.front.contact
  }
  // {
  //   val: 'Оплата',
  //   href: routes.front.payment
  // }
]

const programsLinks = [
  {
    val: 'Психотерапия',
    href: '/programs/psihoterapiya'
  },
  {
    val: 'Консультирование',
    href: '/programs/konsultirovanie'
  },
  {
    val: 'Детская психология',
    href: '/programs/detskaya-psihologiya'
  },
  {
    val: 'Диетология и нутрициология',
    href: '/programs/dietologiya-i-nutriciologiya'
  },
  {
    val: 'Клиническая психология',
    href: '/programs/klinicheskaya-psihologiya'
  },
  {
    val: 'Организационная психология',
    href: '/programs/organizacionnaya-psihologiya'
  },
  {
    val: 'Общая психология',
    href: '/programs/obshaya-psihologiya'
  }
]

export { staticLinks, programsLinks }
