import stls from '@/styles/components/layout/Footer.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import { number } from '@/data/contact'
import { BtnVk, BtnWhatsapp, BtnTelegram, BtnBeta } from '@/components/btns'

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
          <BtnBeta text={'Задать вопрос'} />
        </div>
      </Wrapper>
    </footer>
  )
}

export default Footer
