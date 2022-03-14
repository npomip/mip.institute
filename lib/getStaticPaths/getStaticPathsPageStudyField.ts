import {
  TypePageStudyFieldPaths,
  TypePageStudyFieldPathsQuery
} from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'

const getStaticPathsPageStudyField = async (): Promise<{
  paths: TypePageStudyFieldPaths
  fallback: boolean | 'blocking'
}> => {
  const res = await apolloClient.query<TypePageStudyFieldPathsQuery>({
    query: gql`
      query GetStaticPathsPageStudyField {
        programs {
          category {
            slug
          }
          study_field {
            slug
          }
        }
      }
    `
  })

  return {
    paths: Array.from(
      new Set(
        res.data?.programs?.map(program => ({
          params: {
            category: program?.category?.slug || 'category',
            studyField: program?.study_field?.slug || 'studyField'
          }
        }))
      )
    ) || [{ params: { category: 'category', studyField: 'studyField' } }],
    fallback: 'blocking'
  }
}

export default getStaticPathsPageStudyField
