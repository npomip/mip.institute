import stls from '@/styles/components/sections/HeroPrograms.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import { BtnProgramFields } from '@/components/btns'
import { useEffect, useContext } from 'react'
import { IconSearchAlt } from '@/components/icons'

const HeroPrograms = () => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.heading}>
          <h1 className={stls.title}>Программы</h1>
          <div className={stls.searchbox}>
            <input type='text' name='search' placeholder='Поиск программы' />
            <div className={stls.search}>
              <IconSearchAlt />
            </div>
          </div>
        </div>
        <div className={stls.btn}>
          <BtnProgramFields />
        </div>
      </Wrapper>
    </section>
  )
}

export default HeroPrograms
