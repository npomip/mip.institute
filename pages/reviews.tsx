import { fetchPrograms, fetchReviews } from '@/helpers/index'
import ProgramsContext from '@/context/programs/programsContext'
import { useContext, useEffect } from 'react'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routesFront, revalidate } from '@/config/index'
import { routeReviews } from '@/data/routes'
import companyName from '@/data/companyName'
import Reviews from '@/components/sections/Reviews'

const ReviewsPage = ({ programs, reviews }) => {
  const { setPrograms, setCurProgramsType, setCurProgramsStudyFieldSlug } =
    useContext(ProgramsContext)

  useEffect(() => {
    setPrograms(programs)
    setCurProgramsType(null)
    setCurProgramsStudyFieldSlug(null)
  }, [])

  return (
    <>
      <NextSeo
        title={`Отзывы и статьи наших студентов | ${companyName}`}
        description={truncate(
          `${reviews[reviews.length - 1].title}, ${
            reviews[reviews.length - 1].name
          } | ${reviews[reviews.length - 2].title}, ${
            reviews[reviews.length - 2].name
          }`,
          120
        )}
        canonical={`${routesFront.root}${routeReviews}`}
      />
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
