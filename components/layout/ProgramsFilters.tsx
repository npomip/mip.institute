import StudyFields from '@/components/general/StudyFields'
import { useFilter, useFilterDispatch } from '@/context/FilterContext/FilterContext'
import stls from '@/styles/components/layout/ProgramsFilters.module.sass'
import FilterTag from '../filters/FilterTag'
import ProgramSorting from '../general/ProgramSorting'

type ProgramsFiltersType = {
  ofType?: 'profession' | 'course' | null
  close?: any
}

const ProgramsFilters = ({ ofType = null, close }: ProgramsFiltersType) => {
  const { categories, filters } = useFilter()
  const dispatch = useFilterDispatch()
  const { category } = filters

  const handleTag = (e) => {
    if(category === e){
      dispatch({ type: 'resetCategoryFilter' })
    } else {
      dispatch({ type: 'setCategoryFilter', payload: e })
    }
  }

  return (
    <div className={stls.container}>
      <ProgramSorting />
      <div className={stls.categories}>
        {categories.map(el => (
          <FilterTag 
          key={el}
          onClick={() => handleTag(el)}
          isActive={category === el}
          isCategories
          >
            {el}
          </FilterTag>
        ))}
      </div>

      {/* <StudyFields aside ofType={ofType} close={close} /> */}
    </div>
  )
}

export default ProgramsFilters
