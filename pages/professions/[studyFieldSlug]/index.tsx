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
import { routeProfessions } from '@/data/routes'
import companyName from '@/data/companyName'
import { PagesPrograms } from '@/components/pages'

const ProfessionsStudyFieldPage = ({ programs, studyFieldSlug }) => {
  const {
    setPrograms,
    setCurProgramsType,
    setCurProgramsStudyFieldSlug,
    studyFields
  } = useContext(ProgramsContext)

  useEffect(() => {
    setPrograms(programs)
    setCurProgramsType('profession')
    setCurProgramsStudyFieldSlug(studyFieldSlug)
  }, [programs, studyFieldSlug])

  const studyFieldLabel =
    studyFields.filter(studyField => studyField.slug === studyFieldSlug)[0]
      ?.label || 'Профессии'

  return (
    <>
      <NextSeo
        title={`${studyFieldLabel} | Профессии | ${companyName}`}
        description={truncate(
          `Профессии - длинные программы для полного погружения в направление`,
          120
        )}
        canonical={`${frontRootUrl}${routeProfessions}/${studyFieldSlug}`}
      />
      <PagesPrograms ofType='profession' />
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

export default ProfessionsStudyFieldPage
