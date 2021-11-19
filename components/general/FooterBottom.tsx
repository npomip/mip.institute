import stls from '@/styles/components/general/FooterBottom.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import Link from 'next/link'
import { routePoliciesTerms, routePoliciesPrivacy } from '@/data/routes'

const FooterBottom = () => {
  return (
    <div className={stls.container}>
      <Wrapper>
        <p className={stls.copy}>
          &copy; Московский Институт Психологии, {new Date().getFullYear()}
        </p>
        <Link href={routePoliciesTerms}>
          <a className={stls.agreeLink}>Договор оферты</a>
        </Link>
        <Link href={routePoliciesPrivacy}>
          <a className={stls.docLink}>Политика конфиденциальности</a>
        </Link>
      </Wrapper>
    </div>
  )
}

export default FooterBottom
