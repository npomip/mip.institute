import stls from '@/styles/components/sections/Cta.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import { BtnAlpha } from '@/components/btns'

const Cta = ({ title = null, desc = null, btn = null }) => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.text}>
          <h2 className={stls.title}>{title}</h2>
          <p className={stls.p}>{desc}</p>
        </div>
        <BtnAlpha text={btn} />
      </Wrapper>
    </section>
  )
}

export default Cta
