import {
  TypeGeneralGetStaticPropsContext,
  TypePageLiveCoursesProps,
  TypePageLiveCoursesPropsQuery
} from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import { revalidate } from '@/config/index'

const getStaticPropsPageLiveCourses = async ({
  context
}: TypeGeneralGetStaticPropsContext): Promise<{
  props: TypePageLiveCoursesProps
  revalidate: number | boolean
}> => {
  const res = await apolloClient.query<TypePageLiveCoursesPropsQuery>({
    query: gql`
      query GetStaticPropsPageLiveCourses {
        
        lifeCourses {
          title
          picture {
            url
            width
            height
          }
          date
          studyField
          studyFieldSlug
          slug
          price
          duration
          courseOpened
        }
      }
    `
  })

  return {
    
    props: {
      ...res.data,
    },
    revalidate: revalidate.default
    
  }
}

export default getStaticPropsPageLiveCourses