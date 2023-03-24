import { useParams } from 'react-router-dom';
import { useUpdateTodoStatusMutation, GetUserDocument } from "@/gen/graphql";
import { Users } from '@/gen/graphql';

import { Checkbox } from "@mui/material";

export function UpdateStatus({ id, status }: { id: number, status: boolean }) {
  const { user_id } = useParams<{ user_id: string }>();
  const [updateTodoStatus] = useUpdateTodoStatusMutation({
    variables: {
      id,
      is_completed: !status,
    },
    update: (cache, { data }) => {
      if(!data) return;
      if(!data.update_todos_by_pk) return;

      const existing = cache.readQuery({ 
        query: GetUserDocument,
        variables: {
          id: parseInt(user_id || ''),
        },
      }) as { users_by_pk: Users } | null;

      if(!existing) return;

      const { users_by_pk: { todos: existingTodos } } = existing;
      if (!existingTodos) return;

      const updatedTodo = existingTodos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          is_completed: !status,
        }
      });
      cache.writeQuery({
        query: GetUserDocument,
        variables: {
          id: parseInt(user_id || ''),
        },
        data: { 
          users_by_pk: {
            ...existing.users_by_pk,
            todos: updatedTodo,
          }
        },
      });
    }
  });

  const handleChange = () => {
    updateTodoStatus();
  }

  return (
    <Checkbox checked={status} onChange={handleChange} />
  );
}