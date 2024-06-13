import FiltersForLifeCourses from '@/components/filters/FiltersForLifeCourses'
import ProgramsFilters from '@/components/layout/ProgramsFilters'
import Wrapper from '@/components/layout/Wrapper'
import { ContactForm, HeroPrograms } from '@/components/sections'
import { useFilteredItems } from '@/context/FilterContext/FilterContext'
import stls from '@/styles/components/sections/Programs.module.sass'
import { TypeLibPrograms } from '@/types/index'
import { useRouter } from 'next/router'
import CardProfession from '../cards/CardProfession'
import ResetFilter from '../filters/ResetFilter'
import { findMinMaxForSlider } from '../funcs/findMinMaxForSlider'

type PagesProgramsType = {
  ofType?: 'course' | 'profession'
  programs?: TypeLibPrograms
  studyFields?: string[]
}

const PagesPrograms = ({ ofType, programs,studyFields }: PagesProgramsType) => {
  const filteredItems = useFilteredItems()

  const router = useRouter()

  const {asPath, query} = router


  const { studyFieldSlug, filter} = query

  if(filter && filter === 'popular'){
    programs = programs.filter(el => el.isPopular)
  }

  const prices = programs && programs.map(el => el.price)
  const programsDuration =
    programs && programs.map(el => el?.studyMounthsDuration)
  const minmaxDuration =
    programsDuration && findMinMaxForSlider(programsDuration)
  const minmaxPrice = prices && findMinMaxForSlider(prices)

  const handleResetFilters = () => {
    
    const { ofType, studyFieldSlug, ...rest } = router.query;
    router.push({
      pathname: '/programs',
      query: null,
  })
  }
  return (
    <>
      <HeroPrograms minmaxDuration={minmaxDuration} minmaxPrice={minmaxPrice} />
      <section className={stls.container}>
        <div className={stls.sorting}>
          <ProgramsFilters studyFields={studyFields} />
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
              {programs?.map((profession, idx) => (
                <CardProfession
                  key={profession.title + idx}
                  profession={profession}
                />
              ))}
            </div>
            {filteredItems?.length === 0 && (
              <>Кажется, что по вашему запросу ничего не нашлось</>
            )}
          </div>
        </Wrapper>
      </section>
      <ContactForm />
    </>
  )
}

export default PagesPrograms
