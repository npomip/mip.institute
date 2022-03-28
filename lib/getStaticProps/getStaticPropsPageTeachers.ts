import {
  TypeGeneralGetStaticPropsContext,
  TypePageTeachersProps,
  TypePageTeachersPropsQuery
} from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import { revalidate } from '@/config/index'

const getStaticPropsPageTeachers = async ({
  context
}: TypeGeneralGetStaticPropsContext): Promise<{
  props: TypePageTeachersProps
  revalidate: number | boolean
}> => {
  const res = await apolloClient.query<TypePageTeachersPropsQuery>({
    query: gql`
      query GetStaticPropsPageTeachers {
        programs {
          id
          studyField
          studyFieldSlug
        }
        teachers {
          id
          name
          achievements
          portrait {
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

export default getStaticPropsPageTeachers
