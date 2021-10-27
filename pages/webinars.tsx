import { fetchPrograms, fetchWebinars } from '@/helpers/index'
import ProgramsContext from '@/context/programs/programsContext'
import { revalidate } from '@/config/index'
import { useContext, useEffect } from 'react'
import { WebinarsAlt } from '@/components/sections'

const WebinarsPage = ({ programs, webinars }) => {
  const { setPrograms, setCurProgramsType, setCurProgramsStudyFieldSlug } =
    useContext(ProgramsContext)

  useEffect(() => {
    setPrograms(programs)
    setCurProgramsType(null)
    setCurProgramsStudyFieldSlug(null)
  }, [])

  return (
    <>
      <WebinarsAlt webinars={webinars} />
    </>
  )
}

export async function getStaticProps() {
  const programs = await fetchPrograms()
  const webinars = await fetchWebinars()

  return {
    props: {
      programs,
      webinars
    },
    revalidate: revalidate.default
  }
}

export default WebinarsPage
