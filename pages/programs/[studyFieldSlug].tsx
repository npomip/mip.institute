import { PagesPrograms } from '@/components/pages'
import { fetchPrograms, fetchStudyFieldsPaths } from '@/helpers/index'
import ProgramsContext from '@/context/programs/programsContext'
import { useContext, useEffect } from 'react'

const ProgramsStudyFieldPage = ({ programs, studyFieldSlug }) => {
  const { setPrograms, setCurProgramsType, setCurProgramsStudyFieldSlug } =
    useContext(ProgramsContext)

  useEffect(() => {
    setPrograms(programs)
    setCurProgramsType(null)
    setCurProgramsStudyFieldSlug(studyFieldSlug)
  }, [])

  return (
    <>
      <PagesPrograms />
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

export default ProgramsStudyFieldPage
