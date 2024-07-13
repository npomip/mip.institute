import FiltersForLifeCourses from '@/components/filters/FiltersForLifeCourses'
import Wrapper from '@/components/layout/Wrapper'
import {
  useFilter,
  useFilterDispatch
} from '@/context/FilterContext/FilterContext'
import stls from '@/styles/components/sections/HeroPrograms.module.sass'
import { useRouter } from 'next/router'
import FiltersForLifeCoursesMobile from '../filters/FiltersForLifeCoursesMobile'
import titleName from '../funcs/titleNameFunction'
import InputSearchDesktop from '../general/InputSearchDesktop'

type MinMax = {
  min: number
  max: number
}

type Props = {
  minmaxDuration: MinMax
  minmaxPrice: MinMax
}

const HeroPrograms = ({ minmaxDuration, minmaxPrice }: Props) => {
  const { asPath, query } = useRouter()
  const dispatch = useFilterDispatch()
  const { filters } = useFilter()

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
            <InputSearchDesktop
              value={filters.input.text}
              onChange={changeHandler}
              isProgram
            />
            <FiltersForLifeCoursesMobile btnTitle={'Показать курсы'} isProgram>
              <FiltersForLifeCourses
                cost={minmaxPrice}
                duration={minmaxDuration}
              />
            </FiltersForLifeCoursesMobile>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default HeroPrograms
