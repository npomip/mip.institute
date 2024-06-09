import stls from '@/styles/components/sections/HeroPrograms.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import { BtnProgramsField } from '@/components/btns'
import SearchDesktop from '@/components/general/SearchDesktop'
import { useRouter } from 'next/router'
import titleName from '../funcs/titleNameFunction'
import { useFilterDispatch } from '@/context/FilterContext/FilterContext'

const HeroPrograms = ({ ofType = null }) => {
  const { asPath } = useRouter()
  const dispatch = useFilterDispatch()

  const changeHandler = e => {
    dispatch({
      type: 'setInputValue',
      payload: e.target.value
    })
  }
  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.heading}>
          <h1 className={stls.title}>{titleName(asPath)}</h1>
          <div className={stls.input}>
            <SearchDesktop onChange={changeHandler} />
          </div>
        </div>
        <div className={stls.btn}>
          <BtnProgramsField ofType={ofType} />
        </div>
      </Wrapper>
    </section>
  )
}

export default HeroPrograms
