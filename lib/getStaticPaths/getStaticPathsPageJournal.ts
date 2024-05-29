import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import TypePageJournalPathsQuery from '@/types/page/journal/query/TypePageSeminarPathsQuery'
import TypePageJournalPaths from '@/types/page/journal/paths/TypePageJournalPaths'

const getStaticPathsPageJournal = async (): Promise<{
  paths: TypePageJournalPaths
  fallback: boolean | 'blocking'
}> => {
  const res = await apolloClient.query<TypePageJournalPathsQuery>({
    query: gql`
      query GetStaticPathsPageSeminar {
        blogs {
          studyFieldSlug
          slug
        }
      }
    `
  })

  console.log(Array.from(
    new Set(
      res.data?.blogs?.map(program => ({
        params: {
          slug: program?.slug || 'program'
        }
      }))
    )
  ))

  return {
    paths: Array.from(
      new Set(
        res.data?.blogs?.map(program => ({
          params: {
            slug: program?.slug || 'program'
          }
        }))
      )
    ) || [{ params: { slug: 'program' } }],
    fallback: 'blocking'
  }
}

export default getStaticPathsPageJournal