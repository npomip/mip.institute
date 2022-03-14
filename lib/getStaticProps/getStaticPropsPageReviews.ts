import {
  TypeGeneralGetStaticPropsContext,
  TypePageReviewsProps,
  TypePageReviewsPropsQuery
} from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import { revalidate } from '@/config/index'

const getStaticPropsPageReviews = async ({
  context
}: TypeGeneralGetStaticPropsContext): Promise<{
  props: TypePageReviewsProps
  revalidate: number
}> => {
  const res = await apolloClient.query<TypePageReviewsPropsQuery>({
    query: gql`
      query getStaticPropsPageReviews {
        programs {
          id
          studyField
          studyFieldSlug
        }
        reviews {
          id
          name
          profession
          title
          story
          picture {
            url
            width
            height
          }
        }
      }
    `
  })

  return {
    props: res.data,
    revalidate: revalidate.default
  }
}

export default getStaticPropsPageReviews
