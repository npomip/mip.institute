import stls from '@/styles/components/sections/Cta.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import { ImgCta1 } from '@/components/imgs'
import PopupTrigger from '@/components/general/PopupTrigger'

const Cta = ({ title = null, desc = null, btn = null }) => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.img}>
          <ImgCta1 />
        </div>
        <div className={stls.text}>
          <h2 className={stls.title}>{title}</h2>
          <p className={stls.p}>{desc}</p>
        </div>
        <div className={stls.btn}>
          <PopupTrigger btnAlpha text={btn} />
        </div>
      </Wrapper>
    </section>
  )
}

export default Cta
