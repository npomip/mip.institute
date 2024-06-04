import React from "react"
import stls from '@/styles/components/filters/FiltersWithTag.module.sass'
import classNames from "classnames";
import FiltersForLifeCoursesMobile from "./FiltersForLifeCoursesMobile";
import FiltersForLifeCourses from '@/components/filters/FiltersForLifeCourses'
import FilterTag from '@/components/filters/FilterTag'
import { useFilter, useFilterDispatch } from "@/context/FilterContext/FilterContext";

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
const FiltersWithTag = ({minmaxPrice,minmaxDuration}:FilterTagProps) => {

  const dispatch = useFilterDispatch()

  const { filters } = useFilter()

  const changeHandler = (e) => {
    dispatch({
      type: 'setInputValue',
      payload: e.target.value
    })
  }
  return (
    <div className={stls.filtersWithTags}>
          <FilterTag>Все курсы</FilterTag>
          <div className={stls.filtersWithInput}>
            <input value={filters.input.text} onChange={changeHandler} placeholder='Поиск' className={stls.inp} />
            <FiltersForLifeCoursesMobile btnTitle={'Показать курсы'}>
              <FiltersForLifeCourses
                cost={minmaxPrice}
                duration={minmaxDuration}
              />
            </FiltersForLifeCoursesMobile>
          </div>
        </div>
  )
};

export default FiltersWithTag;
