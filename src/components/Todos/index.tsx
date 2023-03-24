import { useState } from 'react';
import { useGetTodosQuery } from '@/gen/graphql';

import { TextField, Box } from '@mui/material';

import { SubmitTodo } from '@/components/Todos/Submit';

import { TodoList } from '@/components/Todos/TodoList';

export function Todos () {
  const [text, setText] = useState('');
  const { data } = useGetTodosQuery();

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
      <TodoList todos={data?.todos} />
    </>
  );
}