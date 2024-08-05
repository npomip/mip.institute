import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import TypePageJournalPathsQuery from '@/types/page/journal/query/TypePageSeminarPathsQuery'
import TypePageJournalPaths from '@/types/page/journal/paths/TypePageJournalPaths'
import TypePageLiveCoursePaths from '@/types/page/liveCourse/paths/TypePageLiveCoursePaths'
import TypePageLiveCoursePathsQuery from '@/types/page/liveCourse/query/TypePageLiveCoursePathsQuery'

const getStaticPathsPageLiveCourse = async (): Promise<{
  paths: TypePageLiveCoursePaths
  fallback: boolean | 'blocking'
}> => {
  const res = await apolloClient.query<TypePageLiveCoursePathsQuery>({
    query: gql`
      query getStaticPathsPageLiveCourse {
        lifeCourses {
          slug
        }
      }
    `
  })

  return {
    paths: Array.from(
      new Set(
        res.data?.lifeCourses?.map(program => ({
          params: {
            slug: program?.slug || 'program'
          }
        }))
      )
    ) || [{ params: { slug: 'program' } }],
    fallback: 'blocking'
  }
}

export default getStaticPathsPageLiveCourse