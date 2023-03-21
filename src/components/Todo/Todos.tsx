import { Todos as TypeTodo } from '@/gen/graphql';
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Typography } from '@mui/material';

interface TodosProps {
  todos: TypeTodo[] | undefined;
}

export function Todos ({ todos }: TodosProps) {

  if (!todos) return null;
  return (
    <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align="right">text</TableCell>
            <TableCell align="right">created_at</TableCell>
            <TableCell align="right">updated_at</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todos.map((todo) => (
            <TableRow
              key={todo.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {todo.id}
              </TableCell>
              <TableCell align="right">{todo.text}</TableCell>
              <TableCell align="right">{todo.created_at}</TableCell>
              <TableCell align="right">{todo.updated_at}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}