import { routes } from '@/config/index'
import {
  ProgramTypes,
  useFilter,
  useFilterDispatch
} from '@/context/FilterContext/FilterContext'
import { ContextStaticProps } from '@/context/index'
import stls from '@/styles/components/general/ProgramSorting.module.sass'
import { useContext } from 'react'
import { BtnField } from '../btns'
import FilterTag from '../filters/FilterTag'
import ProgramSelect from '../program/ProgramSelect'

const ProgramSorting = () => {
  const { curProgramsType, curProgramsStudyFieldSlug } =
    useContext(ContextStaticProps)

  const slug = curProgramsStudyFieldSlug ? curProgramsStudyFieldSlug : ''

  const dispatch = useFilterDispatch()

  const { filters } = useFilter()

  const handleCourses = () => {
    dispatch({
      type: 'setPrograms',
      payload: ProgramTypes.Courses
    })
  }

  const handleProfessions = () => {
    dispatch({
      type: 'setPrograms',
      payload: ProgramTypes.Professions
    })
  }
  const handleAll = () => {
    dispatch({
      type: 'setPrograms',
      payload: ProgramTypes.All
    })
    dispatch({ type: 'clearBooleanFilter', filterName: 'isPopular' })
  }

  const handleSetPopularCourses = () => {
    if (!filters.isPopular) {
      dispatch({ type: 'setBooleanFilter', filterName: 'isPopular' })
    } else {
      dispatch({ type: 'clearBooleanFilter', filterName: 'isPopular' })
    }
  }

  return (
    <div className={stls.container}>
      <FilterTag
        onClick={handleAll}
        isActive={filters.type === ProgramTypes.All && !filters.isPopular}>
        Все курсы
      </FilterTag>

      <FilterTag
        onClick={handleProfessions}
        isActive={filters.type === ProgramTypes.Professions}>
        Профессиональная переподготовка
      </FilterTag>

      <FilterTag
        onClick={handleCourses}
        isActive={filters.type === ProgramTypes.Courses}>
        Повышение квалификации
      </FilterTag>

      <FilterTag onClick={handleSetPopularCourses} isActive={filters.isPopular}>
        Популярные курсы
      </FilterTag>
      <ProgramSelect />
    </div>
  )
}

export default ProgramSorting
