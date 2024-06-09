import { useEffect, useState } from 'react'
import stls from '@/styles/components/general/RangeSlide.module.sass'
import RangeSlider from 'react-range-slider-input'
import 'react-range-slider-input/dist/style.css'
import {
  useFilter,
  useFilterDispatch
} from '@/context/FilterContext/FilterContext'

const RangeSlide = ({
  min,
  max,
  title,
  dispatchFilterType,
  measure,
  step = 1,
  resetFilters,
  setResetFilters
}) => {
  const [value, setValue] = useState([min, max])

  const { additional } = useFilter()

  const dispatch = useFilterDispatch()

  useEffect(() => {
    if (additional.reset) {
      setValue([min, max])
    }
    dispatch({
      type: 'setBool',
      payload: false
    })
  }, [additional.reset])

  useEffect(() => {
    dispatch({
      type: dispatchFilterType,
      min: value[0],
      max: value[1]
    })
  }, [value])

  return (
    <div className={stls.container}>
      <p>{title}</p>
      <span className={stls.interval}>
        от {value[0]} до {value[1]} {measure}
      </span>
      <div className='withBlackThumb'>
        <RangeSlider
          className={stls.custom}
          min={min}
          max={max}
          value={value}
          step={step}
          onInput={setValue}
        />
      </div>
    </div>
  )
}

export default RangeSlide
