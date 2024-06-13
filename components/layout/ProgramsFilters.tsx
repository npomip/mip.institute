import {
  ProgramTypes,
  useFilter,
  useFilterDispatch
} from '@/context/FilterContext/FilterContext'
import stls from '@/styles/components/layout/ProgramsFilters.module.sass'
import FilterTag from '../filters/FilterTag'
import ProgramSelect from '../program/ProgramSelect'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import { useRouter } from 'next/router'

const ProgramsFilters = ({studyFields=[]}) => {
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

  // const handleCourses = () => {
  //   dispatch({
  //     type: 'setPrograms',
  //     payload: ProgramTypes.Courses
  //   })
  // }

  // const handleProfessions = () => {
  //   dispatch({
  //     type: 'setPrograms',
  //     payload: ProgramTypes.Professions
  //   })
  // }
  // const handleAll = () => {
  //   dispatch({
  //     type: 'setPrograms',
  //     payload: ProgramTypes.All
  //   })
  //   dispatch({ type: 'clearBooleanFilter', filterName: 'isPopular' })
  // }

  // const router = useRouter

  
  const router = useRouter()

  const {asPath, query} = router


  const { ofType, studyFieldSlug, filter, opened} = query

  const handleNavigation = (destination: string) => {
    
    const { ofType, studyFieldSlug, ...rest } = router.query;
    router.push({
      pathname: destination,
      query: rest,
  })
  }
  const handleSetPopularCourses = () => {
    if (filter !== 'popular') {
      router.push({
        pathname: router.pathname,
        query: { ...router.query, filter: 'popular' },
    });
    } else {
      const { filter, ...rest } = router.query;
      router.push({
        pathname: router.pathname,
        query: rest,
    });
    }
  }

  const options = categories.map(el => ({ value: el, label: el }))
  return (
    <div className={stls.container}>
      <div className={stls.sorting}>
        <FilterTag
          onClick={() => handleNavigation('/programs')}
          isActive={ofType === 'programs'}
          isProgram>
          Все курсы
        </FilterTag>

        <FilterTag
          onClick={() => handleNavigation('/professions')}
          isActive={ofType === 'professions'}
          isProgram>
          Профессиональная переподготовка
        </FilterTag>

        <FilterTag
          onClick={() => handleNavigation('/courses')}
          isActive={ofType === 'courses'}
          isProgram>
          Повышение квалификации
        </FilterTag>

        <FilterTag
          onClick={handleSetPopularCourses}
          isActive={filter === 'popular'}
          isProgram>
          Популярные курсы
        </FilterTag>
        {!isMobileAndTabletLayout && <ProgramSelect onChange={handleSelect} />}
      </div>

      <div className={stls.categories}>
        {!isMobileAndTabletLayout &&
          studyFields.map(el => (
            <FilterTag
              key={el}
              onClick={() => handleNavigation(`/${ofType}/${el.studyFieldSlug}`)}
              isActive={studyFieldSlug === el.studyFieldSlug}
              isCategories>
              {el.studyField}
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
