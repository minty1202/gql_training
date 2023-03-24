import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { Select } from '@/components/Users/Select';
import { useGetUsersQuery } from '@/gen/graphql';

export function Users() {
  const { data } = useGetUsersQuery();
  if (!data) return null;

  const { users } = data;
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align="center">name</TableCell>
            <TableCell align="center">created_at</TableCell>
            <TableCell align="center">updated_at</TableCell>
            <TableCell/>
            <TableCell/>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.id}
              </TableCell>
              <TableCell align="center">{user.name}</TableCell>
              <TableCell align="center">{user.created_at}</TableCell>
              <TableCell align="center">{user.updated_at}</TableCell>
              <TableCell><Select id={user.id} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}