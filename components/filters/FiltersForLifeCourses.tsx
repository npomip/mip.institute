import stls from '@/styles/components/filters/FiltersForLifeCourses.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import { BtnSearch, BtnFilter } from '@/components/btns'
import RangeSlide from '../general/RangeSlide'
import {
  useFilter,
  useFilterDispatch
} from '@/context/FilterContext/FilterContext'
import FilterContainer from './FilterContainer'
import ToggleBtn from '../btns/ToggleBtn'
import FilterWithToggle from './FilterWithToggle'
import { useState } from 'react'
import { IconClose } from '../icons'

const Filters = ({ cost, duration }) => {
  const [resetFilters, setResetFilters] = useState(false)
  const dispatch = useFilterDispatch()

  const { filters } = useFilter()
  const handleRecruitment = () => {
    if(!filters.courseOpened){
      dispatch({
        type: 'setBooleanFilter',
        filterName: 'courseOpened'
      })
    }else {
      dispatch({
        type: 'clearBooleanFilter',
        filterName: 'courseOpened'
      })
    }
  }

  return (
    <div className={stls.filters} >
      <FilterContainer >
        <FilterWithToggle
          checked={filters.courseOpened}
          description={'Идет набор'}
          onChange={handleRecruitment}
        />
      </FilterContainer>

      <FilterContainer>
        <RangeSlide
          setResetFilters={setResetFilters}
          resetFilters={resetFilters}
          dispatchFilterType={'setDurationFilter'}
          title={'Длительность программы'}
          min={duration.min}
          max={duration.max}
          measure={'месяцев'}
        />
      </FilterContainer>

      <FilterContainer>
        <RangeSlide
          setResetFilters={setResetFilters}
          resetFilters={resetFilters}
          dispatchFilterType={'setPriceFilter'}
          title={'Стоимость программы'}
          min={cost.min}
          max={cost.max}
          step={100}
          measure={'руб.'}
        />
      </FilterContainer>
    </div>
  )
}

export default Filters
