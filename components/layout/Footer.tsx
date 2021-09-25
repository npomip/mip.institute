import stls from '@/styles/components/layout/Footer.module.sass'
import Link from 'next/link'
import Wrapper from '@/components/layout/Wrapper'
import { number } from '@/data/contact'
import { BtnVk, BtnWhatsapp, BtnTelegram } from '@/components/btns'
import PopupTrigger from '@/components/general/PopupTrigger'

const Footer = () => {
  return (
    <footer className={stls.container}>
      <Wrapper>
        <div className={stls.numbers}>
          <a href={number.href} className={stls.number}>
            {number.val}
          </a>
          <a href={number.href} className={stls.number}>
            {number.val}
          </a>
        </div>
        <div className={stls.sm}>
          <BtnVk dark mlzero />
          <BtnWhatsapp dark />
          <BtnTelegram dark />
        </div>
        <div className={stls.btn}>
          <PopupTrigger btn='beta' cta='askQuestion' />
        </div>
      </Wrapper>
      <div className={stls.bottom}>
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
    </footer>
  )
}

export default Footer
