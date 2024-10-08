import stls from '@/styles/components/sections/FooterBottom.module.sass'
import footerLinks from 'constants/footerBottom'

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
