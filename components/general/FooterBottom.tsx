import stls from '@/styles/components/general/FooterBottom.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import Link from 'next/link'
import { routes } from '@/config/index'

const FooterBottom = () => {
  return (
    <div className={stls.container}>
      <Wrapper>
        <p className={stls.copy}>
          &copy; Московский Институт Психологии, {new Date().getFullYear()}
        </p>
        <a
          href={routes.front.policiesTerms}
          target='_blank'
          rel='noopener noreferrer'
          className={stls.agreeLink}>
          Договор оферты
        </a>
        <a
          href={routes.front.policiesPrivacy}
          target='_blank'
          rel='noopener noreferrer'
          className={stls.docLink}>
          Политика конфиденциальности
        </a>
      </Wrapper>
    </div>
  )
}

export default FooterBottom
