import {
  TypeGeneralGetStaticPropsContext,
  TypePageProgramsProps,
  TypePageProgramsPropsQuery
} from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import { revalidate } from '@/config/index'
import TypePageJournalPropsQuery from '@/types/page/journal/query/TypePageJournalPropsQuery'
import TypePageJournalsProps from '@/types/page/journals/props/TypePageJournalsProps'

const getStaticPropsPageJournals = async ({
  context
}: TypeGeneralGetStaticPropsContext): Promise<{
  props: TypePageJournalsProps
  revalidate: number | boolean
}> => {
  // console.log('context', context)
  const res = await apolloClient.query<TypePageJournalPropsQuery>({
    query: gql`
      query GetStaticPropsPageJournal {
  blogs {
    id
    title
    slug
    subtitle
    studyField
    studyFieldSlug
    article {
      __typename
      ... on  ComponentBlogTextImageBlock {
        title
        content
        image {
          url
          width
          height
        } 
      }
    __typename
      ... on ComponentBlogTextBlock{
        text
      }
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

export default getStaticPropsPageJournals