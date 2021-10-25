import { fetchPrograms } from '@/helpers/index'
import ProgramsContext from '@/context/programs/programsContext'
import { revalidate } from '@/config/index'
import { useContext, useEffect } from 'react'

const TeachersPage = ({ programs }) => {
  const { setPrograms, setCurProgramsType, setCurProgramsStudyFieldSlug } =
    useContext(ProgramsContext)

  useEffect(() => {
    setPrograms(programs)
    setCurProgramsType(null)
    setCurProgramsStudyFieldSlug(null)
  }, [])

  return <>Teachers</>
}

export async function getStaticProps() {
  const programs = await fetchPrograms()

  return {
    props: {
      programs
    },
    revalidate: revalidate.default
  }
}

export default TeachersPage
