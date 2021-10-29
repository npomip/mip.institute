import ProgramsContext from '@/context/programs/programsContext'
import { useContext, useEffect } from 'react'
import {
  fetchPrograms,
  fetchStudyFieldsPaths,
  filterProgramsByStudyField
} from '@/helpers/index'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { frontRootUrl, revalidate } from '@/config/index'
import { routePrograms } from '@/data/routes'
import companyName from '@/data/companyName'
import { PagesPrograms } from '@/components/pages'

const ProgramsStudyFieldPage = ({ programs, studyFieldSlug }) => {
  const {
    setPrograms,
    setCurProgramsType,
    setCurProgramsStudyFieldSlug,
    studyFields
  } = useContext(ProgramsContext)

  useEffect(() => {
    setPrograms(programs)
    setCurProgramsType(null)
    setCurProgramsStudyFieldSlug(studyFieldSlug)
  }, [programs, studyFieldSlug])

  const studyFieldLabel =
    studyFields.filter(studyField => studyField.slug === studyFieldSlug)[0]
      ?.label || 'Программы'

  return (
    <>
      <NextSeo
        title={`${studyFieldLabel} | Все направления | ${companyName}`}
        description={truncate(
          `Профессии - длинные программы для полного погружения в направление. Курсы - короткие программы, чтобы изучить один конкретный навык`,
          120
        )}
        canonical={`${frontRootUrl}${routePrograms}/${studyFieldSlug}`}
      />
      <PagesPrograms />
    </>
  )
}

export async function getStaticProps({ params: { studyFieldSlug } }) {
  const programs = await fetchPrograms()
  // const programs = await filterProgramsByStudyField({
  //   programs: data,
  //   studyFieldSlug
  // })

  return {
    props: {
      programs,
      studyFieldSlug
    },
    revalidate: revalidate.default
  }
}

export async function getStaticPaths() {
  const paths = await fetchStudyFieldsPaths()

  return {
    paths,
    fallback: 'blocking'
  }
}

export default ProgramsStudyFieldPage
