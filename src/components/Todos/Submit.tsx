import { Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useInsertTodoMutation, GetUserDocument } from '@/gen/graphql';
import { Users } from '@/gen/graphql';


interface SubmitTodoProps {
  text: string;
  onSubmit: () => void;
}

export function SubmitTodo({ text, onSubmit }: SubmitTodoProps) {
  const { user_id } = useParams<{ user_id: string }>();
  const [insertTodo, { data, error }] = useInsertTodoMutation({
    variables: {
      text: text,
      user_id: parseInt(user_id || ''),
    },
    // キャッシュの更新
    update: (cache, { data }) => {
      if (!data) return;
      if (!data.insert_todos_one) return;

      const newTodo = data.insert_todos_one
      const existing = cache.readQuery({ 
        query: GetUserDocument,
        variables: {
          id: parseInt(user_id || ''),
        },
      }) as { users_by_pk: Users } | null;

      if (!existing) return;
  
      const { users_by_pk: { todos } } = existing;
      if (!todos) return;

      cache.writeQuery({
        query: GetUserDocument,
        variables: {
          id: parseInt(user_id || ''),
        },
        data: { 
          users_by_pk: {
            ...existing.users_by_pk,
            todos: [newTodo, ...todos],
          }
        },
      });
    }
  });

  const handleSubmit = () => {
    if (!text) return;
    insertTodo();
    if (error) throw new Error(error.message);
    if (!data) return;
    if (!data.insert_todos_one) return;

    onSubmit();
  };

  return (
    <Button variant="contained" onClick={handleSubmit}>送信</Button>
  )
}