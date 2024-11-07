import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClientv5'


// To this URL: https://<YOUR_DOMAIN>/api/<YOUR_CT>
// With the header: Authorization: bearer <YOUR_API_TOKEN>

// test token strapi v 5 6ff024a59190ab47ac120b09d6f0457c407b4e7167da87393c213b7bc37f9078bbe52875f46d273168befc38e46bd2ce7055af7495b77d0f5d464f8c9b03620c2b9c670c0f9f72b2e52ef63bc7152e3da940dd205e0468597b9165d28f580d00aea1bec6212874f30aa0d02b56dcc5929ce9fd6df20c559fdd570bc31b7a11c5

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
