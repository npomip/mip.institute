import {
  ProgramTypes,
  useFilter,
  useFilterDispatch,
  useFilteredItems
} from '@/context/FilterContext/FilterContext'
import stls from '@/styles/components/layout/ProgramsFilters.module.sass'
import FilterTag from '../filters/FilterTag'
import ProgramSelect from '../program/ProgramSelect'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import { useRouter } from 'next/router'
import { findFilteredProgramsLength } from '@/helpers/general/findFilteredProgramsLength'
import { findProgramsLength } from '@/helpers/general/findProgramsLength'
import { findProgrmasLengthByCustomProperty } from '@/helpers/general/findProgrmasLengthByCustomProperty'
import { getUniqueCategories } from '../funcs/getUniqueCategories'

const ProgramsFilters = ({ studyFields = [], allPrograms=[] }) => {
  
  const { categories, filters } = useFilter()
  const dispatch = useFilterDispatch()
  const { category } = filters

  const filteredItems = useFilteredItems()
  
  
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')

  const handleSelect = (value: any) => {
    dispatch({
      type: 'sortFilter',
      payload: value.value
    })
  }

  const handleTag = e => {
    const { ofType, studyFieldSlug, ...rest } = router.query
    if(e.value === studyFieldSlug){
      return null
    }
    
    router.push({
      pathname: `/${ofType}/${e.value}`,
      query: rest
    })
  }

  const router = useRouter()

  const { asPath, query } = router

  const { ofType, studyFieldSlug, filter, opened } = query
  
  const handleNavigation = (destination: string) => {
    const { ofType, studyFieldSlug, ...rest } = router.query
    router.push({
      pathname: destination,
      query: rest
    })
  }
  const handleSetPopularCourses = () => {
    if (filter !== 'popular') {
      router.push({
        pathname: router.pathname,
        query: { ...router.query, filter: 'popular' }
      })
      // dispatch({ type: 'setBooleanFilter', filterName: 'isPopular' })
    } else {
      const { filter, ...rest } = router.query
      router.push({
        pathname: router.pathname,
        query: rest
      })
      // dispatch({ type: 'clearBooleanFilter', filterName: 'isPopular' })
    }
  }

  const options = studyFields.map(el => ({
    value: el.studyFieldSlug,
    label: el.studyField
  }))

  return (
    <div className={stls.container}>
      <div className={stls.sorting}>
        <FilterTag
          onClick={() => handleNavigation('/programs')}
          isActive={ofType === 'programs'}
          // findFilteredProgramsLength(filteredItems, el.studyFieldSlug, ofType as string) 
          quantity={ofType === 'programs' && !studyFieldSlug ? findProgramsLength(filteredItems, 'programs') : ofType === 'programs' && studyFieldSlug  ? findProgramsLength(allPrograms, 'programs') - findFilteredProgramsLength(allPrograms, studyFieldSlug, ofType as string) + findFilteredProgramsLength(filteredItems, studyFieldSlug, ofType as string)  : findProgramsLength(allPrograms, 'programs')}
          isProgram>
          Все курсы
        </FilterTag>

        <FilterTag
          onClick={() => handleNavigation('/professions')}
          isActive={ofType === 'professions'}
          quantity={ofType === 'professions' && !studyFieldSlug ? findProgramsLength(filteredItems, 'professions') : ofType === 'professions' && studyFieldSlug  ? findProgramsLength(allPrograms, 'professions') - findFilteredProgramsLength(allPrograms, studyFieldSlug, ofType as string) + findFilteredProgramsLength(filteredItems, studyFieldSlug, ofType as string)  : findProgramsLength(allPrograms, 'professions')}
          
          isProgram>
          Профессиональная переподготовка
        </FilterTag>

        <FilterTag
          onClick={() => handleNavigation('/courses')}
          isActive={ofType === 'courses'}
          quantity={ofType === 'courses' && !studyFieldSlug ? findProgramsLength(filteredItems, 'courses') : ofType === 'courses' && studyFieldSlug  ? findProgramsLength(allPrograms, 'courses') - findFilteredProgramsLength(allPrograms, studyFieldSlug, ofType as string) + findFilteredProgramsLength(filteredItems, studyFieldSlug, ofType as string)  : findProgramsLength(allPrograms, 'courses')}
          isProgram>
            Повышение квалификации
        </FilterTag>

        <FilterTag
          onClick={handleSetPopularCourses}
          isActive={filter === 'popular'}
          quantity={findProgrmasLengthByCustomProperty(filteredItems, 'isPopular', true)}
          isProgram>
          Популярные курсы
        </FilterTag>
        {!isMobileAndTabletLayout && <ProgramSelect onChange={handleSelect} />}
      </div>

      <div className={stls.categories}>
        {!isMobileAndTabletLayout &&
          studyFields.map((el, i) => (
            <FilterTag
              key={el.studyField + i}
              onClick={() =>
                handleNavigation(`/${ofType}/${el.studyFieldSlug}`)
              }
              isActive={studyFieldSlug === el.studyFieldSlug}
              quantity={studyFieldSlug === el.studyFieldSlug ? findFilteredProgramsLength(filteredItems, el.studyFieldSlug, ofType as string) : !studyFieldSlug ? findFilteredProgramsLength(filteredItems, el.studyFieldSlug, ofType as string)  :   findFilteredProgramsLength(allPrograms, el.studyFieldSlug, ofType as string)}
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
