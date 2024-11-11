import {
  TypeGeneralGetStaticPropsContext,
} from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import { revalidate } from '@/config/index'
import { log } from 'console'
import TypePagePracticalTrainingsProps from '@/types/page/practicalTrainings/props/TypePagePracticalTrainingsProps'
import TypePagePracticalTrainingsPropsQuery from '@/types/page/practicalTrainings/query/TypePagePracticalTrainingsPropsQuery'

const getStaticPropsPageLectoriums = async ({
  context
}: TypeGeneralGetStaticPropsContext): Promise<{
  props: TypePagePracticalTrainingsProps
  revalidate: number | boolean
}> => {
  const res = await apolloClient.query<TypePagePracticalTrainingsPropsQuery>({
    query: gql`
      query getStaticPropsPagePracticalTrainings {
        lectoriums {
          id
          title
          subtitle
          type
          slug
          date
          price
          targetDate
          endTime
          speaker {
              picture {
                url
                width
                height
              }
              text {
                text
              }
              title
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

export default getStaticPropsPageLectoriums