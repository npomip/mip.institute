import {
  TypeGeneralGetStaticPropsContext,
  TypePageHomeProps,
  TypePageHomePropsQuery
} from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import { revalidate } from '@/config/index'

const getStaticPropsPageHome = async ({
  context
}: TypeGeneralGetStaticPropsContext): Promise<{
  props: TypePageHomeProps
  revalidate: number | boolean
}> => {
  const res = await apolloClient.query<TypePageHomePropsQuery>({
    query: gql`
      query GetStaticPropsPageHome {
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
          slug
          heroPicture {
            url
            width
            height
          }
          educationCode
          title
          admissionDate
          minTime
          maxTime
        }
        practicalTrainings {
          title
          duration
          slug
          admissionDate
          programPicture1 {
            url
            width
            height
          }
        }
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
      }
    `
  })

  return {
    props: res.data,
    revalidate: revalidate.default
  }
}

export default getStaticPropsPageHome
