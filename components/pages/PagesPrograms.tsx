import FiltersForLifeCourses from '@/components/filters/FiltersForLifeCourses'
import ProgramsFilters from '@/components/layout/ProgramsFilters'
import Wrapper from '@/components/layout/Wrapper'
import { ContactForm, HeroPrograms } from '@/components/sections'
import {
  useFilter,
  useFilterDispatch,
  useFilteredItems
} from '@/context/FilterContext/FilterContext'
import stls from '@/styles/components/sections/Programs.module.sass'
import { TypeLibPrograms } from '@/types/index'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import CardProfession from '../cards/CardProfession'
import ResetFilter from '../filters/ResetFilter'
import { findMinMaxForSlider } from '../funcs/findMinMaxForSlider'
import { getUniqueCategories } from '../funcs/getUniqueCategories'
import Breadcrumbs from '../general/Breadcrumbs'

type PagesProgramsType = {
  programs?: TypeLibPrograms
  bachelors?: any[]
  studyFields?: string[]
  allPrograms: any[]
  breadcrumbs: {
    label: string
    path: string
    slug: string
  } []
}

const PagesPrograms = ({ programs, studyFields, allPrograms, breadcrumbs, bachelors=[] }: PagesProgramsType) => {
  
  let filteredItems = useFilteredItems()

  const dispatch = useFilterDispatch()

  const categories = getUniqueCategories(filteredItems)

  const prices = programs && programs.map(el => el.price)
  const programsDuration =
    programs && programs.map(el => el?.studyMounthsDuration)
  const minmaxDuration =
    programsDuration && findMinMaxForSlider(programsDuration)
  const minmaxPrice = prices && findMinMaxForSlider(prices)

  useEffect(() => {
    dispatch({
      type: 'setDurationFilter',
      min: minmaxDuration.min,
      max: minmaxDuration.max
    })
    dispatch({
      type: 'setPriceFilter',
      min: minmaxPrice.min,
      max: minmaxPrice.max
    })
    dispatch({ type: 'setItems', payload: programs })
  }, [programs])

  const router = useRouter()

  const { query } = router
  const { filter, opened } = query

  const favprograms = allPrograms.filter(el => el.isPopular === true)

  const favcategories = getUniqueCategories(favprograms)

  useEffect(() => {
    if(filter === 'popular') {
      dispatch({ type: 'setBooleanFilter', filterName: 'isPopular' })
  } else {
    dispatch({ type: 'clearBooleanFilter', filterName: 'isPopular' })
  }
    
  }, [filter])

  useEffect(() => {
    if(opened) {
      dispatch({ type: 'setBooleanFilter', filterName: 'courseOpened' })
  } else {
    dispatch({ type: 'clearBooleanFilter', filterName: 'courseOpened' })
  }
    
  }, [opened])

  const handleResetFilters = () => {
    const { ofType, studyFieldSlug, ...rest } = router.query
    router.push({
      pathname: '/programs',
      query: null
    })
  }

  return (
    <>
    <Wrapper><Breadcrumbs isJournal breadcrumbs={breadcrumbs} /></Wrapper>
      
      <HeroPrograms minmaxDuration={minmaxDuration} minmaxPrice={minmaxPrice} />
      <section className={stls.container}>
        <div className={stls.sorting}>
          <ProgramsFilters
          bachelors={bachelors}
          allPrograms={allPrograms}
            studyFields={query.studyFieldSlug && filter === 'popular' ? favcategories : query.studyFieldSlug ? studyFields :  categories}
          />
        </div>
        <Wrapper>
          <div className={stls.filters}>
            <ResetFilter onClick={handleResetFilters} onIndex />
            {minmaxDuration && minmaxPrice && (
              <FiltersForLifeCourses
                cost={minmaxPrice}
                duration={minmaxDuration}
              />
            )}
          </div>

          <div className={stls.content}>
            <div className={stls.programs}>
              {filteredItems?.length > 0 ? (
                filteredItems?.map((profession, idx) => (
                  <CardProfession
                    key={profession.title + idx}
                    profession={profession}
                  />
                ))
              ) : (
                <>Кажется, что по вашему запросу ничего не нашлось</>
              )}
            </div>
          </div>
        </Wrapper>
      </section>
      <ContactForm />
    </>
  )
}

export default PagesPrograms
