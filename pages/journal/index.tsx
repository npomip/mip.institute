import StudyFieldSlugFilter from '@/components/general/StudyFieldSlugFilter'
import Wrapper from '@/components/layout/Wrapper'
import SlugTags from '@/components/sections/SlugTags'
import SeoPagesJournals from '@/components/seo/SeoPageJournals'
import { dev, preview, prod, routes } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import stls from '@/styles/pages/JournalSlug.module.sass'
import { gql, useQuery } from '@apollo/client'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

// const CHECK_TOKENS = gql`
//   query Blogs {
//     blogs {
//       id
//       title
//     }
//   }
// `

const JournalPage = ({ blogs }) => {
  const router = useRouter()

  if(prod && !preview){
  blogs = blogs?.filter(el => el.previewOnly === false)
  }
  const [selectedField, setSelectedField] = useState({
    studyFieldSlug: router.query.studyFieldSlug || '',
    studyField: router.query.studyField || 'Все cтатьи'
  })

  useEffect(() => {
    setSelectedField({studyFieldSlug: localStorage.getItem('selectedFieldSlug') || '',
    studyField: localStorage.getItem('selectedField') || 'Все cтатьи'
  })

  }, [selectedField.studyField])

  // const sortedBlogs = [...blogs].sort((a, b) => {
  //   // Предположим, что a.date и b.date содержат строки с датами
  //   const dateA = new Date(a.date)
  //   const dateB = new Date(b.date)
  //   return dateB.getTime() - dateA.getTime() // Сортировка от самой поздней даты к более ранней
  // })

  const blogsFilter = selectedField.studyField == 'Все cтатьи' ? blogs : blogs.filter(el => el.studyFieldSlug === selectedField.studyFieldSlug)

  // if(loading) {
  //   return <p>loading</p>
  // }

  return (
    <Wrapper>
      <SeoPagesJournals />
      <h1 className={stls.title}>Блог МИП</h1>
      <StudyFieldSlugFilter
        selectedField={selectedField}
        setSelectedField={setSelectedField}
        props={blogs}
        slug='journal'
      />
      <SlugTags selectedField={selectedField}  props={blogsFilter} slug='journal' />
    </Wrapper>
  )
}

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ context, page: routes.front.journals })

export default JournalPage
