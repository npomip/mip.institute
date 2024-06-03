// import StudyFieldSlugFilter from '@/components/general/StudyFieldSlugFilter'
import { findMinMaxForSlider } from '@/components/funcs/findMinMaxForSlider'
import FiltersForLifeCourses from '@/components/filters/FiltersForLifeCourses'
import Wrapper from '@/components/layout/Wrapper'
import SlugTagsLiveCourses from '@/components/sections/SlugTagsLiveCourses'
// import SeoPagesJournals from '@/components/seo/SeoPageJournals'
import { routes } from '@/config/index'
import {
  FilterProvider,
  useFilter
} from '@/context/FilterContext/FilterContext'
import { handleGetStaticProps } from '@/lib/index'
import stls from '@/styles/pages/LiveCoursesSlug.module.sass'
import { GetStaticProps } from 'next'
import 'reactjs-popup/dist/index.css'
import FiltersForLifeCoursesMobile from '@/components/filters/FiltersForLifeCoursesMobile'
import FilterTag from '@/components/filters/FilterTag'
import FiltersWithTag from '@/components/filters/FiltersWithTags'

const JournalPage = ({ lifeCourses }) => {
  const durations = lifeCourses.map(el => el.duration)
  const prices = lifeCourses.map(el => el.price)

  const minmaxDuration = findMinMaxForSlider(durations)
  console.log(minmaxDuration);
  

  const minmaxPrice = findMinMaxForSlider(prices)

  return (
    <Wrapper>
      <FilterProvider items={lifeCourses}>
        {/* {liveCourses.map(el => (
        <p>{el.title}</p>
      ))} */}
        {/* <SeoPagesJournals />
      <h1 className={stls.title}>Блог МИП</h1>
      <StudyFieldSlugFilter
        selectedField={selectedField}
        setSelectedField={setSelectedField}
        props={blogs}
        slug='journal'
      /> */}
        <h1 className={stls.title}>LIFE курсы</h1>
        <FiltersWithTag minmaxPrice={minmaxPrice} minmaxDuration={minmaxDuration} />

        <div className={stls.withFilter}>
          <div className={stls.filtersDesktop}>
            <FiltersForLifeCourses
              cost={minmaxPrice}
              duration={minmaxDuration}
            />
          </div>
          <SlugTagsLiveCourses slug='live-courses' />
        </div>
      </FilterProvider>
    </Wrapper>
  )
}

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ context, page: routes.front.liveCourses })

export default JournalPage
