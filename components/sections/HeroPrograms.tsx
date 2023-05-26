import stls from '@/styles/components/sections/HeroPrograms.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import { BtnProgramsField } from '@/components/btns'
import SearchDesktop from '@/components/general/SearchDesktop'
import SearchProgram from '../general/SearchProgram'

const HeroPrograms = ({ ofType = null }) => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.heading}>
          <h1 className={stls.title}>Программы</h1>
          <SearchDesktop />
          
        </div>
        <div className={stls.btn}>
          <BtnProgramsField ofType={ofType} />
          
        </div>
      </Wrapper>
    </section>
  )
}

export default HeroPrograms
