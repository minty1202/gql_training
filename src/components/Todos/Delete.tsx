import { Button } from '@mui/material';
import { useDeleteTodoMutation, GetTodosDocument } from '@/gen/graphql';
import { Todos as TypeTodo } from '@/gen/graphql';

export function Delete({ id }: { id: number }) {
  const [deleteTodo] = useDeleteTodoMutation({
    variables: {
      id,
    },
    update: (cache, { data }) => {
      if (!data) return;
      if (!data.delete_todos) return;
      const existing = cache.readQuery({ query: GetTodosDocument }) as { todos: TypeTodo[] } | null;
      if (!existing) return;
      const { todos: existingTodos } = existing;
      const updatedTodo = existingTodos.filter((todo) => todo.id !== id);
      cache.writeQuery({
        query: GetTodosDocument,
        data: { todos: updatedTodo },
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
