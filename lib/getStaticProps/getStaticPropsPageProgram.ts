import {
  TypeGeneralGetStaticPropsContext,
  TypePageProgramProps,
  TypePageProgramPropsQuery
} from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import { revalidate } from '@/config/index'

const getStaticPropsPageProgram = async ({
  context,
  type
}: TypeGeneralGetStaticPropsContext & {
  type?: string | null
}): Promise<{
  props: TypePageProgramProps
  revalidate: number
}> => {
  const studyFieldSlug = context?.params?.studyFieldSlug?.toString() || null
  const slug = context?.params?.slug?.toString() || null

  const res = await apolloClient.query<TypePageProgramPropsQuery>({
    query: gql`
      query GetStaticPropsPageProgram(
        $slug: String!
        $studyFieldSlug: String!
        $type: String!
      ) {
        programs {
          id
          studyField
          studyFieldSlug
        }
        program: programs(
          where: { slug: $slug, studyFieldSlug: $studyFieldSlug, type: $type }
        ) {
          id
          title
          heroPicture {
            url
            width
            height
          }
          slug
          studyForm
          type
          studyMounthsDuration
          description
          studyFormLabel
          typeLabel
          studyHours
          WhatYouWillLearn
          ForWhom
          fullTitle
          shortContents
          resumeTitle
          entrySalary
          resumeSkills
          jobTitles
          qualification
          studyField
          typeFullLabel
          studyFieldSlug
          price
          discount
          questions
          qnas {
            question
            answer
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
      }
    `,
    variables: {
      slug,
      studyFieldSlug,
      type
    }
  })

  return {
    props: {
      ...res?.data,
      studyFieldSlug,
      program: res?.data?.program?.[0] || null
    },
    revalidate: revalidate.default
  }
}

export default getStaticPropsPageProgram
