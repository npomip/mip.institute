import { TypeGeneralGetStaticPropsContext } from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import { revalidate } from '@/config/index'
import TypePageBachelorPropsQuery from '@/types/page/bachelor/TypePageBachelorPropsQuery'
import TypePageBachelorProps from '@/types/page/bachelor/props/TypePageBachelorProps'

const getStaticPropsBachelor = async ({
  context
}: TypeGeneralGetStaticPropsContext): Promise<{
  props: TypePageBachelorProps
  revalidate: number | boolean
}> => {
  const slug = context?.params?.slug?.toString() || null
  console.log(slug)

  try {
    const res = await apolloClient.query<TypePageBachelorPropsQuery>({
      query: gql`
        query getStaticPropsBachelor($slug: String!) {
          bachelor: bachelors(where: { slug: $slug }) {
            title
            teachers {
              id
              name
              achievements
              specialization
              experience
              portrait {
                url
                width
                height
              }
              index_number {
                idx
              }
            }
            programs {
              id
              title
              studyHours
              heroPicture {
                url
                width
                height
              }
              index_number {
                idx
              }
            }
          }
        }
      `,
      variables: {
        slug
      }
    })
    console.log(res.data)

    return {
      props: {
        bachelor: res?.data?.bachelor?.[0]
        // lifeCourse: res?.data?.lifeCourse?.[0] || null,
        // reviews: reviewsData
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

export default getStaticPropsBachelor
