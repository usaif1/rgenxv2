import { getSdkApollo } from "./apolloRequester";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://axowbduxtchcdtanreum.supabase.co/graphql/v1",
  cache: new InMemoryCache(),
  headers: {
    apiKey: "",
  },
});

export const graphqlClient = getSdkApollo(client as any);
