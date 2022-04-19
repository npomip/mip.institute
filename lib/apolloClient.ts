import { ApolloClient, InMemoryCache } from '@apollo/client'
import { routes } from '@/config/index'

const client = new ApolloClient({
  uri: `${routes.back.root}${routes.back.graphql}`,
  cache: new InMemoryCache()
})

export default client
