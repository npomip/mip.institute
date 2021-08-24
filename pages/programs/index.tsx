import { PagesPrograms } from '@/components/pages'
import { fetchPrograms } from '@/helpers/index'
import ProgramsContext from '@/context/programs/programsContext'
import { useContext, useEffect } from 'react'

const ProgramsPage = ({ programs }) => {
  const { setPrograms, setCurProgramsType, setCurProgramsStudyFieldSlug } =
    useContext(ProgramsContext)

  useEffect(() => {
    setPrograms(programs)
    setCurProgramsType(null)
    setCurProgramsStudyFieldSlug(null)
  }, [])

  return (
    <>
      <PagesPrograms />
    </>
  )
}

export async function getStaticProps(context) {
  const programs = await fetchPrograms()

  return {
    props: {
      programs
    }
    // revalidate: 60 * 60 * 24 // a single day
  }
}

export default ProgramsPage
