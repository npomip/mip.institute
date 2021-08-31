import { PagesProgram } from '@/components/pages'
import { fetchPrograms, getProgram, fetchProgramsPaths } from '@/helpers/index'
import ProgramsContext from '@/context/programs/programsContext'
import ProgramContext from '@/context/program/programContext'
import { useContext, useEffect } from 'react'

const CoursePage = ({ programs, program, studyFieldSlug }) => {
  const { setPrograms, setCurProgramsType, setCurProgramsStudyFieldSlug } =
    useContext(ProgramsContext)
  const { setProgram } = useContext(ProgramContext)

  useEffect(() => {
    setPrograms(programs)
    setProgram(program)
    setCurProgramsType('course')
    setCurProgramsStudyFieldSlug(studyFieldSlug)
  }, [])

  return (
    <>
      <PagesProgram />
    </>
  )
}

export async function getStaticProps({ params: { slug } }) {
  const programs = await fetchPrograms()
  const program = getProgram({ data: programs, ofType: 'course', slug })

  const studyFieldSlug = program.studyFieldSlug

  return {
    props: {
      programs,
      program,
      studyFieldSlug
    },
    revalidate: 60 * 60
    // revalidate: 60 * 60 * 24 // a single day
  }
}

export async function getStaticPaths() {
  const paths = await fetchProgramsPaths({ ofType: 'course' })

  return {
    paths,
    fallback: 'blocking'
  }
}

export default CoursePage
