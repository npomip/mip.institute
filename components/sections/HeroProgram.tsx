import stls from '@/styles/components/sections/HeroProgram.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import ProgramLabel from '@/components/program/ProgramLabel'
import ProgramDiscount from '@/components/program/ProgramDiscount'
import { ImgCourse2 } from '@/components/imgs'
import { BtnAlpha, BtnBeta } from '@/components/btns'
import ProgramInfo from '@/components/program/ProgramInfo'

const HeroProgram = () => {
  return (
    <section className={stls.container}>
      <div className={stls.bg}></div>
      <Wrapper>
        <ProgramLabel />
        <div className={stls.top}>
          <div className={stls.heading}>
            <h1 className={stls.title}>
              Психоанализ и психологическое консультирование
            </h1>
            <div className={stls.btnsDesktop}>
              <BtnAlpha text={'Записаться на курс'} />
              <BtnBeta text={'Задать вопрос'} />
            </div>
          </div>
          <div className={stls.pic}>
            <div className={stls.discount}>
              <ProgramDiscount />
            </div>
            <div className={stls.img}>
              <ImgCourse2 />
            </div>
          </div>
        </div>
        <div className={stls.btnsMobile}>
          <BtnAlpha text={'Записаться на курс'} />
          <BtnBeta text={'Задать вопрос'} />
        </div>
        <ProgramInfo />
      </Wrapper>
    </section>
  )
}

export default HeroProgram
