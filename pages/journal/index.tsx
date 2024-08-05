import StudyFieldSlugFilter from '@/components/general/StudyFieldSlugFilter'
import Wrapper from '@/components/layout/Wrapper'
import SlugTags from '@/components/sections/SlugTags'
import SeoPagesJournals from '@/components/seo/SeoPageJournals'
import { preview, prod, routes } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import stls from '@/styles/pages/JournalSlug.module.sass'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const JournalPage = ({ blogs }) => {
  const router = useRouter()

  if (prod && !preview) {
    blogs = blogs?.filter(el => el.previewOnly === false)
  }
  const [selectedField, setSelectedField] = useState({
    studyFieldSlug: router.query.studyFieldSlug || '',
    studyField: router.query.studyField || 'Все cтатьи'
  })

  useEffect(() => {
    setSelectedField({
      studyFieldSlug: localStorage.getItem('selectedFieldSlug') || '',
      studyField: localStorage.getItem('selectedField') || 'Все cтатьи'
    })
  }, [selectedField.studyField])

  const blogsFilter =
    selectedField.studyField == 'Все cтатьи'
      ? blogs
      : blogs.filter(el => el.studyFieldSlug === selectedField.studyFieldSlug)

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
      <SlugTags
        selectedField={selectedField}
        props={blogsFilter}
        slug='journal'
      />
    </Wrapper>
  )
}

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ context, page: routes.front.journals })

export default JournalPage
