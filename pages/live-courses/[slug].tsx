// import StudyFieldSlugFilter from '@/components/general/StudyFieldSlugFilter'
import PopupTrigger from '@/components/general/PopupTrigger'
import Wrapper from '@/components/layout/Wrapper'
import LifeCourseDynamicZones from '@/components/lifeCourses/LifeCoursesDynamicZones'
import { About, Reviews } from '@/components/sections'
import EntryForm from '@/components/sections/EntryForm'
import SlugTags from '@/components/sections/SlugTags'
// import SeoPagesJournals from '@/components/seo/SeoPageJournals'
import { dev, preview, prod, routes } from '@/config/index'
import { handleGetStaticPaths, handleGetStaticProps } from '@/lib/index'
import stls from '@/styles/pages/JournalSlug.module.sass'
import { GetStaticPaths, GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'

const JournalPage = ({ lifeCourse, reviews }) => {

  // const { reviews } = useContext(ContextStaticProps)


  // const reviewsSorted = sortBasedOnNumericOrder({
  //   reviews: sortReviewsCreatedAtASC({ reviews })
  // })
// console.log(lifeCourse)

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
  console.log(lifeCourse);
  
  return (
    // <Wrapper>
      <>
      <NextSeo
      nofollow={true}
      noindex={true}
      />
        <h1>{lifeCourse.title}</h1>
        <PopupTrigger btn='alpha' cta='submitApplication' />
        {lifeCourse?.article?.map((module, idx) => (
            <LifeCourseDynamicZones key={idx} props={module} />
          ))}
          <About isLiveCourse/>
          <Reviews reviews={reviews} isLiveCourse/>
          <EntryForm isLiveCourse/>
      </>

  )
}

export const getStaticPaths: GetStaticPaths = async () =>
  await handleGetStaticPaths({ page: routes.front.liveCourse })

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ context, page: routes.front.liveCourse })

export default JournalPage