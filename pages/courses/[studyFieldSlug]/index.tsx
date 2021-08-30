import { PagesPrograms } from '@/components/pages'
import { fetchPrograms, fetchStudyFieldsPaths } from '@/helpers/index'
import ProgramsContext from '@/context/programs/programsContext'
import { useContext, useEffect } from 'react'

const CoursesStudyFieldPage = ({ programs, studyFieldSlug }) => {
  const { setPrograms, setCurProgramsType, setCurProgramsStudyFieldSlug } =
    useContext(ProgramsContext)

  useEffect(() => {
    setPrograms(programs)
    setCurProgramsType('course')
    setCurProgramsStudyFieldSlug(studyFieldSlug)
  }, [])

  return (
    <>
      <PagesPrograms />
    </>
  )
}

export async function getStaticProps({ params: { studyFieldSlug } }) {
  const programs = await fetchPrograms({ ofType: 'course' })

  return {
    props: {
      programs,
      studyFieldSlug: studyFieldSlug || 'studyFieldSlug'
    },
    revalidate: 60
    // revalidate: 60 * 60 * 24 // a single day
  }
}

export async function getStaticPaths() {
  const paths = await fetchStudyFieldsPaths({ ofType: 'course' })

  return {
    paths,
    fallback: 'blocking'
  }
}

export default CoursesStudyFieldPage
