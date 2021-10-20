import stls from '@/styles/components/general/FooterBottom.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import Link from 'next/link'

const FooterBottom = () => {
  return (
    <div className={stls.container}>
      <Wrapper>
        <p className={stls.copy}>
          &copy; Московский Институт Психологии, {new Date().getFullYear()}
        </p>
        <Link href='/'>
          <a className={stls.docLink}>Договор оферты</a>
        </Link>
        <Link href='/'>
          <a className={stls.docLink}>Политика конфиденциальности</a>
        </Link>
      </Wrapper>
    </div>
  )
}

export default FooterBottom
