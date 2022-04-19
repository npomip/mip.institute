import { GetStaticProps, NextPage } from 'next'
import { TypePageReviewsProps } from '@/types/index'
import { useContext, useEffect } from 'react'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routes, company } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import ProgramsContext from '@/context/programs/programsContext'
import Reviews from '@/components/sections/Reviews'
import { SeoOrganizationJsonLd } from '@/components/seo'

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
        title={`Отзывы и статьи наших студентов | ${company.name}`}
        description={truncate(
          `${reviews[reviews.length - 1].title}, ${
            reviews[reviews.length - 1].name
          } | ${reviews[reviews.length - 2].title}, ${
            reviews[reviews.length - 2].name
          }`,
          120
        )}
        canonical={`${routes.front.root}${routes.front.reviews}`}
      />
      <SeoOrganizationJsonLd />
      <Reviews standalone reviews={reviews} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () =>
  await handleGetStaticProps({ page: routes.front.reviews })

export default ReviewsPage
