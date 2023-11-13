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
  // console.log('context', context)
  const res = await apolloClient.query<TypePageJournalPropsQuery>({
    query: gql`
      query GetStaticPropsPageJournal {
  blogs {
    id
    title
    slug
    subtitle
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
  // console.log('asd', res.data)
  return {
    props: res.data,
    revalidate: revalidate.default
  }
}

export default getStaticPropsPageJournal
