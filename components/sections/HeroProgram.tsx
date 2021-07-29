import stls from '@/styles/components/sections/HeroProgram.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import ProgramLabel from '@/components/program/ProgramLabel'
import ProgramDiscount from '@/components/program/ProgramDiscount'
import { ImgCourse2 } from '@/components/imgs'
import { BtnAlpha, BtnBeta } from '@/components/btns'

const HeroProgram = () => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <ProgramLabel />
        <h1 className={stls.title}>
          Психоанализ и психологическое консультирование
        </h1>
        <div className={stls.pic}>
          <div className={stls.discount}>
            <ProgramDiscount />
          </div>
          <div className={stls.img}>
            <ImgCourse2 />
          </div>
        </div>
        <div className={stls.btns}>
          <BtnAlpha text={'Записаться на курс'} />
          <BtnBeta text={'Задать вопрос'} />
        </div>
      </Wrapper>
    </section>
  )
}

export default HeroProgram
