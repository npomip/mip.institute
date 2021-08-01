import stls from '@/styles/components/sections/FullProgram.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import { BtnAlpha } from '@/components/btns'

const FullProgram = () => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.wrapper}>
          <h2 className={stls.title}>Полная программа</h2>
          <p className={stls.p}>
            Оставьте свои контактные данные, чтобы мы прислали учебный план
            направления
          </p>
          <BtnAlpha text={'Оставить заявку'} />
        </div>
      </Wrapper>
    </section>
  )
}

export default FullProgram
