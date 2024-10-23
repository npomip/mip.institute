import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClientv5'

const getProgramsDatav5 = async () => {
  const GET_PROGRAMS = gql`
    query GetPrograms {
      articles {
        documentId
        title
        description
        slug

        createdAt
        updatedAt
        publishedAt
      }
    }
  `
  try {
    const { data } = await apolloClient.query({ query: GET_PROGRAMS })
    console.log(data)

    return data.articles
  } catch (error) {
    console.error('Failed to fetch programs data:', error)
    return []
  }
}

export default getProgramsDatav5
