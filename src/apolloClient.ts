import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from "@apollo/client"
import {onError} from '@apollo/client/link/error'

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    })
  }

  if (networkError) {
    console.error(`[Network error]: ${networkError}`);
  }
})

const githubApi = 'https://api.github.com/graphql'

const httpLink = new HttpLink({
  uri: githubApi,
  headers:{
    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
  }
})


const link = ApolloLink.from([errorLink,httpLink])

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
})

export default client