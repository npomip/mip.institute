import { TypeGeneralGetStaticPropsContext } from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import { revalidate } from '@/config/index'
import TypePageLiveCourseProps from '@/types/page/liveCourse/props/TypePageLiveCourseProps'
import TypePageLiveCoursePropsQuery from '@/types/page/liveCourse/query/TypePageLiveCoursePropsQuery'

const getStaticPropsPageLiveCourse = async ({
  context
}: TypeGeneralGetStaticPropsContext): Promise<{
  props: TypePageLiveCourseProps
  revalidate: number | boolean
}> => {
  const slug = context?.params?.slug?.toString() || null

  try {
    const res = await apolloClient.query<TypePageLiveCoursePropsQuery>({
      query: gql`
        query getStaticPropsPageLiveCourse($slug: String!) {
          reviews {
            id
            name
            profession
            title
            story
            createdAt
            picture {
              url
              width
              height
            }
            index_number {
              idx
            }
          }
          lifeCourse: lifeCourses(where: { slug: $slug }) {
            title
            lmsId
            price
            slug
            studyField
            article {
              __typename
              ... on ComponentLiveCorsesBlock {
                line {
                  repeatBlock {
                    txt
                    size

                    photo {
                      url
                      width
                      height
                    }
                  }
                }
              }
              __typename
              ... on ComponentLiveCorsesPoints {
                title
                subtitle
                color
                medalion {
                  text
                }
              }
              __typename
              ... on ComponentSharedRepeatListWithTitle {
                title
                record {
                  text
                }
              }
              __typename
              ... on ComponentSharedVideoLinkWithTitle {
                title
                videoLink
              }
            }
            qnas {
              question
              answer
            }
            seo {
              metaTitle
              metaDescription
              metaImage {
                url
                width
                height
                alternativeText
              }
              keywords
              metaRobots
              structuredData
              metaViewport
              canonicalURL
              isSEOFriendly
              metaSocial {
                title
                description
                image {
                  url
                  width
                  height
                  alternativeText
                }
                socialNetwork
              }
            }
            unique_reviews {
              id
              name
              profession
              title
              story
              createdAt
              picture {
                url
                width
                height
              }
            }
            review_subtitle
          }
        }
      `,
      variables: {
        slug
      }
    })
    const reviewsData = res?.data?.reviews || []
    return {
      props: {
        lifeCourse: res?.data?.lifeCourse?.[0] || null,
        reviews: reviewsData
      },
      revalidate: revalidate.default
    }
  } catch (error) {
    console.error('Ошибка запроса:', error)
    console.error('Статус код:', error.statusCode)
    console.error('Результат:', error.result)
    console.log('errrrrrr', error.networkError.result)
    return error
  }
}

export default getStaticPropsPageLiveCourse
