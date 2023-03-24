import { useState } from 'react';
import { useGetUserQuery } from '@/gen/graphql';
import { useParams } from 'react-router-dom';

import { TextField, Box } from '@mui/material';

import { SubmitTodo } from '@/components/Todos/Submit';

import { TodoList } from '@/components/Todos/TodoList';

export function Todos () {
  const { user_id } = useParams<{ user_id: string }>();
  const [text, setText] = useState('');
  const { data } = useGetUserQuery({
    variables: {
      id: parseInt(user_id || ''),
    },
  })

  if (!data) return null
  if (!data.users_by_pk) return null

  const { todos } = data.users_by_pk;

  const handleSubmit = () => {
    setText('');
  };

  return (
    <>
      <Box display='flex' alignItems='center' m={2}>
        <TextField
          label="Todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
          sx={{ mr: 2 }}
        />
        <SubmitTodo text={text} onSubmit={handleSubmit} />
      </Box>
      <TodoList todos={todos} />
    </>
  );
}