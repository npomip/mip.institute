import {
  TypeGeneralGetStaticPropsContext,
} from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import { revalidate } from '@/config/index'
import { log } from 'console'
import TypePageBachelorsPropsQuery from '@/types/page/bachelors/query/TypePageBachelorsPropsQuery'
import TypePageBachelorsProps from '@/types/page/bachelors/props/TypePageBachelorsProps'

const getStaticPropsBachelors = async ({
  context
}: TypeGeneralGetStaticPropsContext): Promise<{
  props: TypePageBachelorsProps
  revalidate: number | boolean
}> => {
  const res = await apolloClient.query<TypePageBachelorsPropsQuery>({
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

  return {
    props: {
      ...res.data
    },
    revalidate: revalidate.default
  }
}

export default getStaticPropsBachelors
