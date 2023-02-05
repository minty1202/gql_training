import { App } from "./App";

import { createRoot } from 'react-dom/client';

import { client } from "../lib/apolloClient";

import { ApolloProvider } from "@apollo/client";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
}
