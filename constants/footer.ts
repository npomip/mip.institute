import { routes } from "../config";

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

export default staticLinks