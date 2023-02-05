import { useGetTodosQuery } from '@/gen/graphql';

import { Typography } from '@mui/material';

import { gql } from "@apollo/client";

export const GET_TODOS = gql`
query GetTodos {
  todos {
    id
    text
    created_at
    updated_at
  }
}`;

export function App() {

  const { data } = useGetTodosQuery();


  console.log(data);

  return (

    <>
      <Typography variant="h1">
        Hello World
      </Typography>
    </>
  );
}
