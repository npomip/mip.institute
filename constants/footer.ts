import { routes } from '../config'

const staticLinks = [
  {
    val: 'Курсы',
    href: routes.front.courses
  },
  {
    val: 'Профессии',
    href: routes.front.professions
  },
  {
    val: 'Высшее образование (Бакалавриат)',
    href: routes.front.bachelors
  },
  {
    val: 'Практическая подготовка',
    href: routes.front.practicalTrainings
  },
  {
    val: 'Вебинары',
    href: routes.front.webinars
  },
  {
    val: 'Преподаватели',
    href: routes.front.teachers
  },
  {
    val: 'Отзывы',
    href: routes.front.reviews
  },
  {
    val: 'Главная',
    href: routes.front.home
  },
  {
    val: 'Об институте',
    href: routes.front.about
  },
  {
    val: 'Сведения об образовательной организации',
    href: routes.front.legal
  },
  {
    val: 'Информация о правилах использования материала',
    href: routes.front.regulation
  },
  {
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
