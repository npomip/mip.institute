import Reviews from '@/components/sections/Reviews'
import { fetchPrograms, fetchReviews } from '@/helpers/index'
import ProgramsContext from '@/context/programs/programsContext'
import { revalidate } from '@/config/index'
import { useContext, useEffect } from 'react'

const ReviewsPage = ({ programs, reviews }) => {
  const { setPrograms, setCurProgramsType, setCurProgramsStudyFieldSlug } =
    useContext(ProgramsContext)

  console.log(reviews)

  useEffect(() => {
    setPrograms(programs)
    setCurProgramsType(null)
    setCurProgramsStudyFieldSlug(null)
  }, [])

  return (
    <>
      <Reviews standalone reviews={reviews} />
    </>
  )
}

export async function getStaticProps() {
  const programs = await fetchPrograms()
  const reviews = await fetchReviews()

  return {
    props: {
      programs,
      reviews
    },
    revalidate: revalidate.default
  }
}

export default ReviewsPage
