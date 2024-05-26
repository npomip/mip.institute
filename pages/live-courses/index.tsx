// import StudyFieldSlugFilter from '@/components/general/StudyFieldSlugFilter'
import { findMinMaxForSlider } from '@/components/funcs/findMinMaxForSlider'
import FiltersForLifeCourses from '@/components/general/FiltersForLifeCourses'
import Wrapper from '@/components/layout/Wrapper'
import SlugTags from '@/components/sections/SlugTags'
import SlugTagsLiveCourses from '@/components/sections/SlugTagsLiveCourses'
// import SeoPagesJournals from '@/components/seo/SeoPageJournals'
import { dev, preview, prod, routes } from '@/config/index'
import { FilterProvider, useFilter } from '@/context/FilterContext/FilterContext'
import { handleGetStaticProps } from '@/lib/index'
import stls from '@/styles/pages/LiveCoursesSlug.module.sass'
import { gql, useQuery } from '@apollo/client'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const JournalPage = ({ lifeCourses }) => {
  const durations = lifeCourses.map(el => el.duration)
  const prices = lifeCourses.map(el => el.price)

  const minmaxDuration = findMinMaxForSlider(durations)

  const minmaxPrice = findMinMaxForSlider(prices)
  // const router = useRouter()

  // if(prod && !preview){
  // blogs = blogs?.filter(el => el.previewOnly === false)
  // }
  // const [selectedField, setSelectedField] = useState({
  //   studyFieldSlug: router.query.studyFieldSlug || '',
  //   studyField: router.query.studyField || 'Все cтатьи'
  // })

  // useEffect(() => {
  //   setSelectedField({studyFieldSlug: localStorage.getItem('selectedFieldSlug') || '',
  //   studyField: localStorage.getItem('selectedField') || 'Все cтатьи'
  // })

  // }, [selectedField.studyField])

  // const blogsFilter = selectedField.studyField == 'Все cтатьи' ? blogs : blogs.filter(el => el.studyFieldSlug === selectedField.studyFieldSlug)

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
