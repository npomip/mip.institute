import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'

const getWebinarsData = async () => {
  const GET_Webinars = gql`
    query GetWebinars {
      webinars {
          id
          name
          date
          
        }
    }
  `
  try {
    const { data } = await apolloClient.query({ query: GET_Webinars })
    return data
  } catch (error) {
    console.error('Failed to fetch programs data:', error)
    return []
  }
}

export default getWebinarsData