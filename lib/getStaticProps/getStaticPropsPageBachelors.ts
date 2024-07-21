import {
  TypeGeneralGetStaticPropsContext,
  TypePageLiveCoursesProps,
  TypePageLiveCoursesPropsQuery
} from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import { revalidate } from '@/config/index'
import { log } from 'console'

const getStaticPropsBachelors = async ({
  context
}: TypeGeneralGetStaticPropsContext): Promise<{
  props: TypePageLiveCoursesProps
  revalidate: number | boolean
}> => {
  const res = await apolloClient.query<TypePageLiveCoursesPropsQuery>({
    query: gql`
      query getStaticPropsBachelors {
        programs {
          id
          title
          slug
          studyField
          studyFieldSlug
          type
          typeLabel
          studyMounthsDuration
          studyHours
          price
          isPopular
          courseOpened
          heroPicture {
            url
            width
            height
          }
          index_number {
            idx
          }
        }

        bachelors {
          educationCode
          title
          minTime
          maxTime
          admissionDate
          slug
          heroPicture {
            url
            width
            height
          }
        }
      }
    `
  })

  console.log(res.data)

  return {
    props: {
      ...res.data
    },
    revalidate: revalidate.default
  }
}

export default getStaticPropsBachelors
