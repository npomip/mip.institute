import {
  TypeGeneralGetStaticPropsContext,
  TypePageProgramsProps,
  TypePageProgramsPropsQuery
} from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import { revalidate } from '@/config/index'
import TypePageJournalProps from '@/types/page/journal/props/TypePageJournalProps'
import TypePageJournalPropsQuery from '@/types/page/journal/query/TypePageJournalPropsQuery'

const getStaticPropsPageJournal = async ({
  context
}: TypeGeneralGetStaticPropsContext): Promise<{
  props: TypePageJournalProps
  revalidate: number | boolean
}> => {

  const studyFieldSlug = context?.params?.studyFieldSlug?.toString() || null
  const slug = context?.params?.slug?.toString() || null
  console.log('context', context)
  try {
  const res = await apolloClient.query<TypePageJournalPropsQuery>({
    query: gql`
      query GetStaticPropsPageJournal(
          $slug: String!
          $studyFieldSlug: String!
        ) {
        blog: blogs(
        where: { slug: $slug, studyFieldSlug: $studyFieldSlug }
        ) {
          id
          title
          slug
          studyFieldSlug
          studyField
          subtitle
          
        }
      }
    `,
      variables: {
        slug,
        studyFieldSlug
      }
  })
  console.log('JOURNAL PROPS', res?.data)
  return {
    props: res.data,
    revalidate: revalidate.default
  }
} catch (error) {
  console.error('Ошибка запроса:', error)
  console.error('Статус код:', error.statusCode)
  console.error('Результат:', error.result)
  console.log('errrrrrr', error.networkError.result)
  return error
}
}

export default getStaticPropsPageJournal
