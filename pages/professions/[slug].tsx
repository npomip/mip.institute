import { PagesProgram } from '@/components/pages'
import { fetchPrograms, getProgram, fetchProgramsPaths } from '@/helpers/index'
import ProgramsContext from '@/context/programs/programsContext'
import ProgramContext from '@/context/program/programContext'
import { useContext, useEffect } from 'react'

const ProfessionPage = ({ programs, program }) => {
  const { setPrograms } = useContext(ProgramsContext)
  const { setProgram } = useContext(ProgramContext)

  useEffect(() => {
    setPrograms(programs)
    setProgram(program)
  }, [])

  return (
    <>
      <PagesProgram />
    </>
  )
}

export async function getStaticProps({ params: { slug } }) {
  const programs = await fetchPrograms()
  const program = getProgram({
    data: programs,
    ofType: 'profession',
    slug
  })

  return {
    props: {
      programs,
      program
    }
    // revalidate: 60 * 60 * 24 // a single day
  }
}

export async function getStaticPaths() {
  const paths = await fetchProgramsPaths({ ofType: 'profession' })

  return {
    paths,
    fallback: 'blocking'
  }
}

export default ProfessionPage
