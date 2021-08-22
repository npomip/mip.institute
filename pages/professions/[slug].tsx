import { PagesProgram } from '@/components/pages'
import { fetchProgram, fetchProgramsPaths } from '@/helpers/index'
import ProgramContext from '@/context/program/programContext'
import { useContext, useEffect } from 'react'

const ProfessionPage = ({ program }) => {
  const { setProgram } = useContext(ProgramContext)

  useEffect(() => {
    setProgram(program)
  }, [])

  return (
    <>
      <PagesProgram program={program} />
    </>
  )
}

export async function getStaticProps({ params: { slug } }) {
  const program = await fetchProgram({ ofType: 'profession', slug })

  return {
    props: {
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
