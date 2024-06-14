import stls from '@/styles/components/filters/FiltersForLifeCourses.module.sass'
import { useRouter } from 'next/router'
import RangeSlide from '../general/RangeSlide'
import FilterContainer from './FilterContainer'
import FilterWithToggle from './FilterWithToggle'

const Filters = ({ cost, duration }) => {

  // const handleRecruitment = () => {
  //   if (!filters.courseOpened) {
  //     dispatch({
  //       type: 'setBooleanFilter',
  //       filterName: 'courseOpened'
  //     })
  //   } else {
  //     dispatch({
  //       type: 'clearBooleanFilter',
  //       filterName: 'courseOpened'
  //     })
  //   }
  // }

  const router = useRouter()

  const {asPath, query} = router

  const { ofType, studyFieldSlug, filter, opened} = query

  const handleSetPopularCourses = () => {
    if (!opened) {
      router.push({
        pathname: router.pathname,
        query: { ...router.query, opened: true },
    });
    } else {
      const { opened, ...rest } = router.query;
      router.push({
        pathname: router.pathname,
        query: rest,
    });
    }
  }

  return (
    <div className={stls.filters}>
      <FilterContainer>
        <FilterWithToggle
          checked={opened}
          description={'Идет набор'}
          onChange={handleSetPopularCourses}
        />
      </FilterContainer>

      <FilterContainer>
        <RangeSlide
          dispatchFilterType={'setDurationFilter'}
          title={'Длительность программы'}
          min={duration.min}
          max={duration.max}
          measure={'месяцев'}
        />
      </FilterContainer>

      <FilterContainer>
        <RangeSlide
          dispatchFilterType={'setPriceFilter'}
          title={'Стоимость программы'}
          min={cost.min}
          max={cost.max}
          step={100}
          measure={'руб.'}
          // classNameStyle='eeeeee'
        />
      </FilterContainer>
    </div>
  )
}

export default Filters
