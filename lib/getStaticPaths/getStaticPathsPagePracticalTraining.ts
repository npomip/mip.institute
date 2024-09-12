import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import TypePageJournalPaths from '@/types/page/journal/paths/TypePageJournalPaths'
import TypePagePracticalTrainingPathsQuery from '@/types/page/practicalTraining/TypePagePracticalTrainingPathsQuery'

const getStaticPathsPagePracticalTraining = async (): Promise<{
  paths: TypePageJournalPaths
  fallback: boolean | 'blocking'
}> => {
  try {
    const res = await apolloClient.query<TypePagePracticalTrainingPathsQuery>({
      query: gql`
        query GetStaticPathsPagePracticalTraining {
          practicalTrainings {
            slug
          }
        }
      `
    })
    return {
      paths: Array.from(
        new Set(
          res.data?.practicalTraining?.map(program => ({
            params: {
              slug: program?.slug || 'program'
            }
          }))
        )
      ) || [{ params: { slug: 'program' } }],
      fallback: 'blocking'
    }
  } catch (error) {
    console.error('Ошибка запроса:', error)
    console.error('Статус код:', error.statusCode)
    console.error('Результат:', error.result)
    // console.log('errrrrrr', error.networkError.result.errors[0])
    return error
  }
}

export default getStaticPathsPagePracticalTraining
