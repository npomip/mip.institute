import { findMinMaxForSlider } from '@/helpers/funcs/findMinMaxForSlider'
import Wrapper from '@/ui/Wrapper'
import SlugTagsLiveCourses from '@/components/sections/SlugTagsLiveCourses'
// import SeoPagesJournals from '@/components/seo/SeoPageJournals'
import FiltersWithContext from '@/components/filters/FiltersWithContext'
import FiltersWithTag from '@/components/filters/FiltersWithTags'
import ResetWrapper from '@/components/filters/ResetWrapper'
import Breadcrumbs from '@/ui/Breadcrumbs'
import { routes } from '@/config/index'
import { FilterProvider } from '@/context/FilterContext/FilterContext'
import { handleGetStaticProps } from '@/lib/index'
import stls from '@/styles/pages/LiveCoursesSlug.module.sass'
import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import 'reactjs-popup/dist/index.css'
import useBreadcrumbs from '@/hooks/general/useBreadcrumbs'

const JournalPage = ({ lifeCourses }) => {
  const durations = lifeCourses.map(el => el.duration)
  const prices = lifeCourses.map(el => el.price)

  const minmaxDuration = findMinMaxForSlider(durations)

  const minmaxPrice = findMinMaxForSlider(prices)
  const segments = ['live-courses']
  const labels = ['LIFE курсы']
  const slugs = ['live-courses']
  const breadcrumbs = useBreadcrumbs(segments, labels, slugs)

  return (
    <Wrapper>
      <NextSeo nofollow={true} noindex={true} />
      <FilterProvider items={lifeCourses}>
        <Breadcrumbs isJournal breadcrumbs={breadcrumbs} />
        <h1 className={stls.title}>LIFE курсы</h1>
        <FiltersWithTag
          minmaxPrice={minmaxPrice}
          minmaxDuration={minmaxDuration}
        />
        <ResetWrapper />
        <div className={stls.withFilter}>
          <div className={stls.filtersDesktop}>
            <FiltersWithContext cost={minmaxPrice} duration={minmaxDuration} />
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
