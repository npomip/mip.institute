import { PagesPrograms } from '@/components/pages'
import {
  fetchPrograms,
  fetchStudyFieldsPaths,
  filterProgramsByStudyField
} from '@/helpers/index'
import ProgramsContext from '@/context/programs/programsContext'
import { useContext, useEffect } from 'react'

const ProfessionsStudyFieldPage = ({ programs, studyFieldSlug }) => {
  const { setPrograms, setCurProgramsType, setCurProgramsStudyFieldSlug } =
    useContext(ProgramsContext)

  useEffect(() => {
    setPrograms(programs)
    setCurProgramsType('profession')
    setCurProgramsStudyFieldSlug(studyFieldSlug)
  }, [programs, studyFieldSlug])

  return (
    <>
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

export default ProfessionsStudyFieldPage
