import {
  TypePageProgramsPaths,
  TypePageProgramsPathsQuery
} from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'

const getStaticPathsPagePrograms = async (): Promise<{
  paths: TypePageProgramsPaths
  fallback: boolean | 'blocking'
}> => {
  const res = await apolloClient.query<TypePageProgramsPathsQuery>({
    query: gql`
      query GetStaticPathsPageCategory {
        categories {
          slug
        }
      }
    `
  })

  return {
    paths: Array.from(
      new Set(
        res.data?.categories?.map(category => ({
          params: { category: category?.slug || 'category' }
        }))
      )
    ) || [{ params: { category: 'category' } }],
    fallback: 'blocking'
  }
}

export default getStaticPathsPagePrograms
