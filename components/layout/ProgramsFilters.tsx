import {
  ProgramTypes,
  useFilter,
  useFilterDispatch
} from '@/context/FilterContext/FilterContext'
import stls from '@/styles/components/layout/ProgramsFilters.module.sass'
import FilterTag from '../filters/FilterTag'
import ProgramSelect from '../program/ProgramSelect'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'

const ProgramsFilters = () => {
  const { categories, filters } = useFilter()
  const dispatch = useFilterDispatch()
  const { category } = filters
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')

  const handleSelect = (value: any) => {
    dispatch({
      type: 'sortFilter',
      payload: value.value
    })
  }

  const handleTag = e => {
    if (e.value) {
      dispatch({ type: 'setCategoryFilter', payload: e.value })
    } else {
      if (category === e) {
        dispatch({ type: 'resetCategoryFilter' })
      } else {
        dispatch({ type: 'setCategoryFilter', payload: e })
      }
    }
  }

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

  const options = categories.map(el => ({ value: el, label: el }))
  return (
    <div className={stls.container}>
      <div className={stls.sorting}>
        <FilterTag
          onClick={handleAll}
          isActive={filters.type === ProgramTypes.All && !filters.isPopular}
          isProgram>
          Все курсы
        </FilterTag>

        <FilterTag
          onClick={handleProfessions}
          isActive={filters.type === ProgramTypes.Professions}
          isProgram>
          Профессиональная переподготовка
        </FilterTag>

        <FilterTag
          onClick={handleCourses}
          isActive={filters.type === ProgramTypes.Courses}
          isProgram>
          Повышение квалификации
        </FilterTag>

        <FilterTag
          onClick={handleSetPopularCourses}
          isActive={filters.isPopular}
          isProgram>
          Популярные курсы
        </FilterTag>
        {!isMobileAndTabletLayout && <ProgramSelect onChange={handleSelect} />}
      </div>

      <div className={stls.categories}>
        {!isMobileAndTabletLayout &&
          categories.map(el => (
            <FilterTag
              key={el}
              onClick={() => handleTag(el)}
              isActive={category === el}
              isCategories>
              {el}
            </FilterTag>
          ))}
      </div>
      {isMobileAndTabletLayout && (
        <div className={stls.mobileSelect}>
          <ProgramSelect
            options={options}
            onChange={handleTag}
            mainColor='#fb6c2e'
            width='345'
          />
          <ProgramSelect onChange={handleSelect} marginTop='10' />
        </div>
      )}
    </div>
  )
}

export default ProgramsFilters
