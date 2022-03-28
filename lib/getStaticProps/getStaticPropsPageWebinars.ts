import {
  TypeGeneralGetStaticPropsContext,
  TypePageWebinarsProps,
  TypePageWebinarsPropsQuery
} from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import { revalidate } from '@/config/index'

const getStaticPropsPageWebinars = async ({
  context
}: TypeGeneralGetStaticPropsContext): Promise<{
  props: TypePageWebinarsProps
  revalidate: number | boolean
}> => {
  const res = await apolloClient.query<TypePageWebinarsPropsQuery>({
    query: gql`
      query GetStaticPropsPageWebinars {
        programs {
          id
          studyField
          studyFieldSlug
        }
        webinars {
          id
          name
          date
          picture {
            url
            width
            height
          }
          title
        }
      }
    `
  })

  return {
    props: res.data,
    revalidate: revalidate.default
  }
}

export default getStaticPropsPageWebinars
