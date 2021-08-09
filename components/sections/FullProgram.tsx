import stls from '@/styles/components/sections/FullProgram.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import { BtnAlpha } from '@/components/btns'
import { ImgFullProgram1 } from '@/components/imgs'

const FullProgram = () => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.wrapper}>
          <div className={stls.img}>
            <ImgFullProgram1 />
          </div>
          <div className={stls.text}>
            <h2 className={stls.title}>Полная программа</h2>
            <p className={stls.p}>
              Оставьте свои контактные данные, чтобы мы прислали учебный план
              направления
            </p>
          </div>
          <div className={stls.btn}>
            <BtnAlpha text={'Оставить заявку'} />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default FullProgram
