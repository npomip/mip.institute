import stls from '@/styles/components/sections/HeroPrograms.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import { BtnProgramFields } from '@/components/btns'
import { useEffect, useContext } from 'react'

const HeroPrograms = () => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <h1 className={stls.title}>Программы</h1>
        <div className={stls.btn}>
          <BtnProgramFields />
        </div>
      </Wrapper>
    </section>
  )
}

export default HeroPrograms
