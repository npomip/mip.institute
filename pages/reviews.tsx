import { GetStaticProps, NextPage } from 'next'
import { TypePageReviewsProps } from '@/types/index'
import { useContext, useEffect } from 'react'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routeReviews } from '@/data/routes'
import companyName from '@/data/companyName'
import { routesFront } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import ProgramsContext from '@/context/programs/programsContext'
import Reviews from '@/components/sections/Reviews'

const ReviewsPage: NextPage<TypePageReviewsProps> = ({ programs, reviews }) => {
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

export const getStaticProps: GetStaticProps = async () =>
  await handleGetStaticProps({ page: routesFront.reviews })

export default ReviewsPage
