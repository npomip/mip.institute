import stls from '@/styles/components/sections/ChooseProgram.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import { BtnAlpha } from '@/components/btns'

const ChooseProgram = () => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.text}>
          <h2 className={stls.title}>Подберите программу</h2>
          <p className={stls.p}>
            Ответьте на несколько вопросов и подберите программу обучения
          </p>
        </div>
        <BtnAlpha text={'Подобрать программу'} />
      </Wrapper>
    </section>
  )
}

export default ChooseProgram
