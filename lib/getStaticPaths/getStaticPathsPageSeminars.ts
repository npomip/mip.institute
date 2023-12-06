import { TypePageProgramPaths, TypePageProgramPathsQuery } from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import TypePageSeminarPathsQuery from '@/types/page/seminars/query/TypePageSeminarPathsQuery'
import TypePageSeminarsPaths from '@/types/page/seminar/paths/TypePageSeminarsPaths'


const getStaticPathsPageSeminars = async (): Promise<{
  paths: TypePageSeminarsPaths
  fallback: boolean | 'blocking'
}> => {
  const res = await apolloClient.query<TypePageSeminarPathsQuery>({
    query: gql`
      query GetStaticPathsPageSeminar {
        seminars {
          studyFieldSlug
        }
      }
    `
  })
  console.log('paths', Array.from(
    new Set(
      res.data?.seminars?.map(program => ({
        params: {
          studyFieldSlug: program?.studyFieldSlug || 'studyFieldSlug',
        }
      }))
    )
  ))
  return {
    paths: Array.from(
      new Set(
        res.data?.seminars?.map(program => ({
          params: {
            studyFieldSlug: program?.studyFieldSlug || 'studyFieldSlug'
          }
        }))
      )
    ) || [{ params: { studyFieldSlug: 'studyFieldSlug' } }],
    fallback: 'blocking'
  }
}

export default getStaticPathsPageSeminars