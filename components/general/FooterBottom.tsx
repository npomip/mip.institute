import { routes } from '@/config/index'
import stls from '@/styles/components/general/FooterBottom.module.sass'

const footerLinks = [
  { href: routes.external.advCake, title: 'Партнерская программа' },
  { href: routes.external.referralProgram, title: 'Пригласи друга' },
  { href: routes.front.policiesTerms, title: 'Договор оферты' },
  { href: routes.front.policiesPrivacy, title: 'Политика конфиденциальности' },
  {
    href: routes.external.license,
    title: 'Лицензия на образовательную деятельность №041363 от 14.04.2021 г.'
  }
]

const FooterBottom = () => {
  return (
    <div className={stls.container}>
      <p className={stls.copy}>&copy; МИП, 2020 - {new Date().getFullYear()}</p>
      {footerLinks.map(el => (
        <a
          key={el.title}
          href={el.href}
          target='_blank'
          rel='noopener noreferrer'
          className={stls.link}>
          {el.title}
        </a>
      ))}
    </div>
  )
}

export default FooterBottom
