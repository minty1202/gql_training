import { Button } from '@mui/material';
import { useInsertTodosMutation, GetTodosDocument } from '@/gen/graphql';
import { Todos as TypeTodo } from '@/gen/graphql';


interface SubmitTodoProps {
  text: string;
  onSubmit: () => void;
}

export function SubmitTodo({ text, onSubmit }: SubmitTodoProps) {
  const [insertTodo, { data, error }] = useInsertTodosMutation({
    variables: {
      text: text,
    },
    // キャッシュの更新
    update: (cache, { data }) => {
      if (!data) return;
      if (!data.insert_todos) return;
      const newTodo = data.insert_todos?.returning[0];

      const existing = cache.readQuery({ query: GetTodosDocument }) as { todos: TypeTodo[] } | null;
      if (!existing) return;
      const { todos } = existing;

      cache.writeQuery({
        query: GetTodosDocument,
        data: { todos: [...todos, newTodo] },
      });
    }
  });

  const handleSubmit = () => {
    if (!text) return;
    insertTodo();
    if (error) throw new Error(error.message);
    if (!data) return;
    if (!data.insert_todos) return;

    onSubmit();
  };

  return (
    <Button variant="contained" onClick={handleSubmit}>送信</Button>
  )
}