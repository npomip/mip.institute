import stls from '@/styles/components/sections/HeroPrograms.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import { BtnProgramFields } from '@/components/btns'

const HeroPrograms = () => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <h1 className={stls.title}>Программы</h1>
        <BtnProgramFields />
      </Wrapper>
    </section>
  )
}

export default HeroPrograms
