import { useUpdateTodoStatusMutation, GetTodosDocument } from "@/gen/graphql";
import { Todos as TypeTodo } from '@/gen/graphql';

import { Checkbox } from "@mui/material";

export function UpdateStatus({ id, status }: { id: number, status: boolean }) {

  const [updateTodoStatus] = useUpdateTodoStatusMutation({
    variables: {
      _eq: id,
      is_completed: !status,
    },
    update: (cache, { data }) => {
      if(!data) return;
      if(!data.update_todos) return;
      const existing = cache.readQuery({ query: GetTodosDocument }) as { todos: TypeTodo[] } | null;
      if(!existing) return;
      const { todos: existingTodos } = existing;
      const updatedTodo = existingTodos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          is_completed: !status,
        }
      });
      cache.writeQuery({
        query: GetTodosDocument,
        data: { todos: updatedTodo },
      });
    }
  });

  const handleChange = () => {
    updateTodoStatus();
  }

  return (
    <Checkbox defaultChecked={status} onChange={handleChange} />
  );
}