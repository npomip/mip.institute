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
  const filters = useFilter()
  console.log('CONTEXTXTXT', filters)

  const dispatch = useFilterDispatch()

  const handleRecruitment = () => {
    console.log('hand')
    dispatch({
      type: 'setIsOpenedForRecruitment',
      filterName: 'courseOpened'
    })
  }

  const removeFilters = () => {
    setResetFilters(true)
    dispatch({
      type: 'clearFilters'
    })
  }

  return (
    <div className={stls.filters}>
      <div className={stls.resetFilterContainer}>
        <p className={stls.resetFilter} onClick={removeFilters}>
          Сбросить фильтры
        </p>
        <div className={stls.icon}>
          {/* <IconClose /> */}
        </div>
      </div>

      <FilterContainer>
        <FilterWithToggle
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
