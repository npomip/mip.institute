import { PagesPrograms } from '@/components/pages'
import { fetchPrograms, fetchStudyFieldsPaths } from '@/helpers/index'
import ProgramsContext from '@/context/programs/programsContext'
import { useContext, useEffect } from 'react'

const ProfessionsStudyFieldPage = ({ programs, studyFieldSlug }) => {
  const { setPrograms, setCurProgramsType, setCurProgramsStudyFieldSlug } =
    useContext(ProgramsContext)

  useEffect(() => {
    setPrograms(programs)
    setCurProgramsType('profession')
    setCurProgramsStudyFieldSlug(studyFieldSlug)
  }, [])

  return (
    <>
      <PagesPrograms />
    </>
  )
}

export async function getStaticProps({ params: { studyFieldSlug } }) {
  const programs = await fetchPrograms({ ofType: 'profession' })

  return {
    props: {
      programs,
      studyFieldSlug: studyFieldSlug || 'studyFieldSlug'
    }
    // revalidate: 60 * 60 * 24 // a single day
  }
}

export async function getStaticPaths() {
  const paths = await fetchStudyFieldsPaths({ ofType: 'profession' })

  return {
    paths,
    fallback: 'blocking'
  }
}

export default ProfessionsStudyFieldPage
