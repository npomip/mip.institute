import stls from '@/styles/components/general/FooterBottom.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import Link from 'next/link'
import { routes } from '@/config/index'

const FooterBottom = () => {
  return (
    <div className={stls.container}>
      {/* <Wrapper> */}
        <p className={stls.copy}>
          &copy; МИП, 2020 - {new Date().getFullYear()}
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
        {/* <p>a</p> */}
      {/* </Wrapper> */}
    </div>
  )
}

export default FooterBottom
