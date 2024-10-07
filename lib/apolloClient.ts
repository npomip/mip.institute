import { routes } from '@/config/index';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: `${routes.back.root}${routes.back.graphql}`,
  cache: new InMemoryCache(),
})

export default client
