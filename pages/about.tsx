import About from '@/components/sections/About'
import { fetchPrograms } from '@/helpers/index'
import ProgramsContext from '@/context/programs/programsContext'
import { useContext, useEffect } from 'react'

const AboutPage = ({ programs }) => {
  const { setPrograms } = useContext(ProgramsContext)

  useEffect(() => {
    setPrograms(programs)
  }, [])

  return (
    <>
      <About />
    </>
  )
}

export async function getStaticProps() {
  const programs = await fetchPrograms()

  return {
    props: {
      programs
    }
  }
}

export default AboutPage
