import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import TypePageJournalPaths from '@/types/page/journal/paths/TypePageJournalPaths'
import TypePageBachelorPathsQuery from '@/types/page/bachelor/TypePageBachelorPathsQuery'

const getStaticPathsPageBachelor = async (): Promise<{
  paths: TypePageJournalPaths
  fallback: boolean | 'blocking'
}> => {
  
  const res = await apolloClient.query<TypePageBachelorPathsQuery>({
    query: gql`
      query GetStaticPathsPageSeminar {
        bachelors {
          slug
        }
      }
    `
  })

  return {
    paths: Array.from(
      new Set(
        res.data?.bachelors?.map(program => ({
          params: {
            // studyFieldSlug: program?.studyFieldSlug || 'studyFieldSlug',
            slug: program?.slug || 'program'
          }
        }))
      )
    ) || [{ params: { slug: 'program' } }],
    fallback: 'blocking'
  }
}

export default getStaticPathsPageBachelor