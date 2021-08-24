import Webinars from '@/components/sections/Webinars'
import { fetchPrograms } from '@/helpers/index'
import ProgramsContext from '@/context/programs/programsContext'
import { useContext, useEffect } from 'react'

const WebinarsPage = ({ programs }) => {
  const { setPrograms, setCurProgramsType, setCurProgramsStudyFieldSlug } =
    useContext(ProgramsContext)

  useEffect(() => {
    setPrograms(programs)
    setCurProgramsType('profession')
    setCurProgramsStudyFieldSlug(null)
  }, [])

  return (
    <>
      <Webinars />
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

export default WebinarsPage
