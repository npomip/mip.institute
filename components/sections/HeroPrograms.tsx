import stls from '@/styles/components/sections/HeroPrograms.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import { BtnProgramFields } from '@/components/btns'
import { useEffect, useContext } from 'react'
import SearchDesktop from '@/components/general/SearchDesktop'

const HeroPrograms = () => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.heading}>
          <h1 className={stls.title}>Программы</h1>
          <SearchDesktop />
        </div>
        <div className={stls.btn}>
          <BtnProgramFields />
        </div>
      </Wrapper>
    </section>
  )
}

export default HeroPrograms
