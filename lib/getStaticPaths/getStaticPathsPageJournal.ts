import { TypePageProgramPaths, TypePageProgramPathsQuery } from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import TypePageSeminarPathsQuery from '@/types/page/seminars/query/TypePageSeminarPathsQuery'
import TypePageSeminarPaths from '@/types/page/seminar/paths/TypePageSeminarPaths'
import TypePageJournalPathsQuery from '@/types/page/journal/query/TypePageSeminarPathsQuery'

const getStaticPathsPageJournal = async (): Promise<{
  paths: TypePageSeminarPaths
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
  console.log('pathsJOURNAL', Array.from(
      new Set(
        res.data?.blogs?.map(program => ({
          params: {
            studyFieldSlug: program?.studyFieldSlug || 'studyFieldSlug',
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
            studyFieldSlug: program?.studyFieldSlug || 'studyFieldSlug',
            slug: program?.slug || 'program'
          }
        }))
      )
    ) || [{ params: { studyFieldSlug: 'studyFieldSlug', slug: 'program' } }],
    fallback: 'blocking'
  }
}

export default getStaticPathsPageJournal