import { PagesPrograms } from '@/components/pages'
import {
  fetchPrograms,
  fetchStudyFieldsPaths,
  filterProgramsByStudyField
} from '@/helpers/index'
import ProgramsContext from '@/context/programs/programsContext'
import { useContext, useEffect } from 'react'

const CoursesStudyFieldPage = ({ programs, studyFieldSlug }) => {
  const { setPrograms, setCurProgramsType, setCurProgramsStudyFieldSlug } =
    useContext(ProgramsContext)

  useEffect(() => {
    setPrograms(programs)
    setCurProgramsType('course')
    setCurProgramsStudyFieldSlug(studyFieldSlug)
  }, [programs, studyFieldSlug])

  return (
    <>
      <PagesPrograms ofType='course' />
    </>
  )
}

export async function getStaticProps({ params: { studyFieldSlug } }) {
  const programs = await fetchPrograms()

  return {
    props: {
      programs,
      studyFieldSlug
    }
    // revalidate: 60 * 60 * 24 // a single day
  }
}

export async function getStaticPaths() {
  const paths = await fetchStudyFieldsPaths()

  return {
    paths,
    fallback: 'blocking'
  }
}

export default CoursesStudyFieldPage
