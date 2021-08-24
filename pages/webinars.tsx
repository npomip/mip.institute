import Webinars from '@/components/sections/Webinars'
import { fetchPrograms } from '@/helpers/index'
import ProgramsContext from '@/context/programs/programsContext'
import { useContext, useEffect } from 'react'

const WebinarsPage = ({ programs }) => {
  const { setPrograms } = useContext(ProgramsContext)

  useEffect(() => {
    setPrograms(programs)
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
