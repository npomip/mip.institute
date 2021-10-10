import { PagesPrograms } from '@/components/pages'
import {
  fetchPrograms,
  fetchStudyFieldsPaths,
  filterProgramsByStudyField
} from '@/helpers/index'
import ProgramsContext from '@/context/programs/programsContext'
import { revalidate } from '@/config/index'
import { useContext, useEffect } from 'react'

const ProgramsStudyFieldPage = ({ programs, studyFieldSlug }) => {
  const { setPrograms, setCurProgramsType, setCurProgramsStudyFieldSlug } =
    useContext(ProgramsContext)

  useEffect(() => {
    setPrograms(programs)
    setCurProgramsType(null)
    setCurProgramsStudyFieldSlug(studyFieldSlug)
  }, [programs, studyFieldSlug])

  return (
    <>
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
