import {
  TypeGeneralGetStaticPropsContext,
  TypePageDefaultProps,
  TypePageDefaultPropsQuery
} from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import { revalidate } from '@/config/index'

const getStaticPropsDefault = async ({
  context
}: TypeGeneralGetStaticPropsContext): Promise<{
  props: TypePageDefaultProps
  revalidate: number
}> => {
  const res = await apolloClient.query<TypePageDefaultPropsQuery>({
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

export default getStaticPropsDefault
