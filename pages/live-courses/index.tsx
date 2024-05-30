import FiltersForLifeCourses from '@/components/filters/FiltersForLifeCourses'
import { findMinMaxForSlider } from '@/components/funcs/findMinMaxForSlider'
import Wrapper from '@/components/layout/Wrapper'
import SlugTagsLiveCourses from '@/components/sections/SlugTagsLiveCourses'
import { routes } from '@/config/index'
import { FilterProvider } from '@/context/FilterContext/FilterContext'
import { handleGetStaticProps } from '@/lib/index'
import stls from '@/styles/pages/LiveCoursesSlug.module.sass'
import { GetStaticProps } from 'next'

const JournalPage = ({ lifeCourses }) => {
  const durations = lifeCourses.map(el => el.duration)
  const prices = lifeCourses.map(el => el.price)

  const minmaxDuration = findMinMaxForSlider(durations)

  const minmaxPrice = findMinMaxForSlider(prices)

  return (
    <Wrapper>
      <FilterProvider items={lifeCourses}>
        <h1 className={stls.title}>LIFE курсы</h1>
        <div className={stls.withFilter}>
          <FiltersForLifeCourses cost={minmaxPrice} duration={minmaxDuration} />
          <SlugTagsLiveCourses slug='live-courses' />
        </div>
      </FilterProvider>
    </Wrapper>
  )
}

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ context, page: routes.front.liveCourses })

export default JournalPage
