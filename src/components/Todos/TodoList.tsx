import { Todos as TypeTodo } from '@/gen/graphql';
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Typography } from '@mui/material';
import { UpdateStatus } from '@/components/Todos/UpdateStatus';
import { Delete } from '@/components/Todos/Delete';

interface TodosProps {
  todos: TypeTodo[] | undefined;
}

export function TodoList ({ todos }: TodosProps) {

  if (!todos) return null;
  return (
    <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>id</TableCell>
            <TableCell align="center">text</TableCell>
            <TableCell align="center">created_at</TableCell>
            <TableCell align="center">updated_at</TableCell>
            <TableCell/>
          </TableRow>
        </TableHead>
        <TableBody>
          {todos.map((todo) => (
            <TableRow
              key={todo.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell><UpdateStatus id={todo.id} status={todo.is_completed || false} /></TableCell>
              <TableCell component="th" scope="row">
                {todo.id}
              </TableCell>
              <TableCell align="center">{todo.text}</TableCell>
              <TableCell align="center">{todo.created_at}</TableCell>
              <TableCell align="center">{todo.updated_at}</TableCell>
              <TableCell><Delete id={todo.id} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}