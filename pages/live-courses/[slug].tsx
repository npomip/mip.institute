// import StudyFieldSlugFilter from '@/components/general/StudyFieldSlugFilter'
import Wrapper from '@/components/layout/Wrapper'
import LifeCourseDynamicZones from '@/components/lifeCourses/LifeCoursesDynamicZones'
import SlugTags from '@/components/sections/SlugTags'
// import SeoPagesJournals from '@/components/seo/SeoPageJournals'
import { dev, preview, prod, routes } from '@/config/index'
import { handleGetStaticPaths, handleGetStaticProps } from '@/lib/index'
import stls from '@/styles/pages/JournalSlug.module.sass'
import { gql, useQuery } from '@apollo/client'
import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const JournalPage = ({ lifeCourse }) => {
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

  return (
    // <Wrapper>
      <>
        <h1>{lifeCourse.title}</h1>
        {lifeCourse?.article?.map((module, idx) => (
            <LifeCourseDynamicZones key={idx} props={module} />
          ))}
          
      </>

  )
}

export const getStaticPaths: GetStaticPaths = async () =>
  await handleGetStaticPaths({ page: routes.front.liveCourse })

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ context, page: routes.front.liveCourse })

export default JournalPage