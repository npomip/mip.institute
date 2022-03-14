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
      query GetStaticPropsDefault {
        programs {
          id
          studyField
          studyFieldSlug
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
