import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/cl7fj2xfu6r8901uf2vgs5yno/master",
  cache: new InMemoryCache(),
});
