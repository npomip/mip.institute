import Reviews from '@/components/sections/Reviews'
import { fetchPrograms } from '@/helpers/index'
import ProgramsContext from '@/context/programs/programsContext'
import { useContext, useEffect } from 'react'

const ReviewsPage = ({ programs }) => {
  const { setPrograms, setCurProgramsType, setCurProgramsStudyFieldSlug } =
    useContext(ProgramsContext)

  useEffect(() => {
    setPrograms(programs)
    setCurProgramsType('profession')
    setCurProgramsStudyFieldSlug(null)
  }, [])

  return (
    <>
      <Reviews />
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

export default ReviewsPage
