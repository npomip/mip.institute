import { TypePageProgramPaths, TypePageProgramPathsQuery } from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import TypePageSeminarPathsQuery from '@/types/page/seminars/query/TypePageSeminarPathsQuery'

const getStaticPathsPageSeminar = async (): Promise<{
  paths: TypePageProgramPaths
  fallback: boolean | 'blocking'
}> => {
  const res = await apolloClient.query<TypePageSeminarPathsQuery>({
    query: gql`
      query GetStaticPathsPageSeminar {
        seminars {
          studyFieldSlug
          slug
        }
      }
    `
  })
  // console.log('paths', res.data.seminars)
  return {
    paths: Array.from(
      new Set(
        res.data?.seminars?.map(program => ({
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

export default getStaticPathsPageSeminar