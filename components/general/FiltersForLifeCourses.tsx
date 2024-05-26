import stls from '@/styles/components/general/FiltersForLifeCourses.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import { BtnSearch, BtnFilter } from '@/components/btns'
import RangeSlide from './RangeSlide'
import { useFilter, useFilterDispatch } from '@/context/FilterContext/FilterContext'

const Filters = ({ cost, duration }) => {
  const filters = useFilter()
  console.log('CONTEXTXTXT', filters)

  const dispatch = useFilterDispatch()

  const handleRecruitment= () => {
    console.log('hand')
    dispatch({
      type: 'setIsOpenedForRecruitment',
      filterName: 'courseOpened'
    })
    // setIsOpenedForRecruitment
  }

  return (
    <div className={stls.filters}>
      <p className={stls.startRecruit}>Идет набор</p>
      <button onClick={handleRecruitment}>Набор</button>
      <RangeSlide
        dispatchFilter={'setDurationFilter'}
        title={'Длительность программы'}
        min={duration.min}
        max={duration.max}
        onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
      />
      <RangeSlide
        dispatchFilter={'setPriceFilter'}
        title={'Стоимость программы'}
        min={cost.min}
        max={cost.max}
        onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
      />
    </div>
  )
}

export default Filters
