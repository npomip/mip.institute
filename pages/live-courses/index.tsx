// import StudyFieldSlugFilter from '@/components/general/StudyFieldSlugFilter'
import { findMinMaxForSlider } from '@/components/funcs/findMinMaxForSlider'
import FiltersForLifeCourses from '@/components/filters/FiltersForLifeCourses'
import Wrapper from '@/components/layout/Wrapper'
import SlugTags from '@/components/sections/SlugTags'
import SlugTagsLiveCourses from '@/components/sections/SlugTagsLiveCourses'
// import SeoPagesJournals from '@/components/seo/SeoPageJournals'
import { dev, preview, prod, routes } from '@/config/index'
import { FilterProvider, useFilter } from '@/context/FilterContext/FilterContext'
import { handleGetStaticProps } from '@/lib/index'
import stls from '@/styles/pages/LiveCoursesSlug.module.sass'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const JournalPage = ({ lifeCourses }) => {
  const durations = lifeCourses.map(el => el.duration)
  const prices = lifeCourses.map(el => el.price)

  const minmaxDuration = findMinMaxForSlider(durations)

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
