import { routes } from '@/config/index';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const clientv5 = new ApolloClient({
  uri: `${routes.back.rootv5}${routes.back.graphql}`,
  cache: new InMemoryCache(),
})

export default clientv5
