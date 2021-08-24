import Reviews from '@/components/sections/Reviews'
import { fetchPrograms } from '@/helpers/index'
import ProgramsContext from '@/context/programs/programsContext'
import { useContext, useEffect } from 'react'

const ReviewsPage = ({ programs }) => {
  const { setPrograms } = useContext(ProgramsContext)

  useEffect(() => {
    setPrograms(programs)
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
