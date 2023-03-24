import { Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useDeleteTodoMutation, GetUserDocument } from '@/gen/graphql';
import { Users } from '@/gen/graphql';

export function Delete({ id }: { id: number }) {
  const { user_id } = useParams<{ user_id: string }>();
  const [deleteTodo] = useDeleteTodoMutation({
    variables: {
      id,
    },
    update: (cache, { data }) => {
      if (!data) return;
      if (!data.delete_todos_by_pk) return;

      const existing = cache.readQuery({ 
        query: GetUserDocument,
        variables: {
          id: parseInt(user_id || ''),
        },
      }) as { users_by_pk: Users } | null;

      if (!existing) return;

      const { users_by_pk: { todos: existingTodos } } = existing;
      if (!existingTodos) return;

      const updatedTodo = existingTodos.filter((todo) => todo.id !== id);
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

  const handleDelete = () => {
    deleteTodo();
  }
  
  return (
    <Button variant="contained" onClick={handleDelete}>削除</Button>
  )
}
