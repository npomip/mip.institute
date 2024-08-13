import { routes } from "../config"

const footerLinks = [
    { href: routes.external.advCake, title: 'Партнерская программа' },
    { href: routes.external.referralProgram, title: 'Пригласи друга' },
    { href: routes.front.policiesTerms, title: 'Договор оферты' },
    { href: routes.front.policiesPrivacy, title: 'Политика конфиденциальности' },
    {
      href: routes.external.license,
      title: 'Лицензия на образовательную деятельность №041363 от 14.04.2021 г.'
    },
    {
      href: routes.front.yandexAnalytics,
      title:
        'Согласие на обработку персональных данных с помощью сервисов «Яндекс.Метрика» и «Google Analytics»'
    }
  ]

export default footerLinks