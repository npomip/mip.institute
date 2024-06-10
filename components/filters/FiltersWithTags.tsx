import React, { useState } from 'react'
import stls from '@/styles/components/filters/FiltersWithTag.module.sass'
import classNames from 'classnames'
import FiltersForLifeCoursesMobile from './FiltersForLifeCoursesMobile'
import FiltersForLifeCourses from '@/components/filters/FiltersForLifeCourses'
import FilterTag from '@/components/filters/FilterTag'
import {
  useFilter,
  useFilterDispatch
} from '@/context/FilterContext/FilterContext'
import InputSearchDesktop from '../general/InputSearchDesktop'

interface FilterTagProps {
  minmaxDuration: {
    min: number
    max: number
  }
  minmaxPrice: {
    min: number
    max: number
  }
}
const FiltersWithTag = ({ minmaxPrice, minmaxDuration }: FilterTagProps) => {
  const dispatch = useFilterDispatch()

  const { filters } = useFilter()

  const changeHandler = e => {
    dispatch({
      type: 'setInputValue',
      payload: e.target.value
    })
  }

  return (
    <div className={stls.filtersWithTags}>
      <div className={stls.tags}>
        <FilterTag
          onClick={() =>
            dispatch({ type: 'clearBooleanFilter', filterName: 'isPopular' })
          }
          isActive={!filters.isPopular}>
          Все курсы
        </FilterTag>
        <FilterTag
          onClick={() =>
            dispatch({ type: 'setBooleanFilter', filterName: 'isPopular' })
          }
          isActive={filters.isPopular}>
          Популярные курсы
        </FilterTag>
      </div>

      <div className={stls.filtersWithInput}>
        <InputSearchDesktop
          value={filters.input.text}
          onChange={changeHandler}
        />
        <FiltersForLifeCoursesMobile btnTitle={'Показать курсы'}>
          <FiltersForLifeCourses cost={minmaxPrice} duration={minmaxDuration} />
        </FiltersForLifeCoursesMobile>
      </div>
    </div>
  )
}

export default FiltersWithTag
