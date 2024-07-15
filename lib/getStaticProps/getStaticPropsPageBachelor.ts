import {
  TypeGeneralGetStaticPropsContext,
} from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import { revalidate } from '@/config/index'
import TypePageLiveCourseProps from '@/types/page/liveCourse/props/TypePageLiveCourseProps'
import TypePageLiveCoursePropsQuery from '@/types/page/liveCourse/query/TypePageLiveCoursePropsQuery'

const getStaticPropsBachelor = async ({
  context
}: TypeGeneralGetStaticPropsContext): Promise<{
  props: TypePageLiveCourseProps
  revalidate: number | boolean
}> => {
  const slug = context?.params?.slug?.toString() || null

  try {
    const res = await apolloClient.query<TypePageLiveCoursePropsQuery>({
      query: gql`
        query getStaticPropsBachelor(
          $slug: String!
        ) {
          
          bachelor: bachelors(
            where: { slug: $slug }
          ) {
            title
            
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

export default getStaticPropsBachelor