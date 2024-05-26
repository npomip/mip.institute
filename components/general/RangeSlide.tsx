import { useEffect, useState } from 'react'
import stls from '@/styles/components/general/RangeSlide.module.sass'
import RangeSlider from 'react-range-slider-input'
import 'react-range-slider-input/dist/style.css'
import { useFilterDispatch } from '@/context/FilterContext/FilterContext'

const RangeSlide = ({ min, max, onChange, title, dispatchFilter }) => {
  const [value, setValue] = useState([min, max])

  const dispatch = useFilterDispatch()

  useEffect(() => {
    dispatch({
          type: dispatchFilter,
          min: value[0],
          max: value[1]
        })
    
  }, [value])

  return (
    <div className={stls.container}>
      <p>{title}</p>
      <span>от {value[0]} до {value[1]}</span>
      <div className='withBlackThumb'>
        <RangeSlider
          className={stls.custom}
          min={min}
          max={max}
          value={value}
          onInput={setValue}
        />
      </div>
    </div>
  )
}

export default RangeSlide
