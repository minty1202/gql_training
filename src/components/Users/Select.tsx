import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

export function Select({ id }: { id: number }) {

  return (
    <Link to={`/${id}/todos`}
      style={{
        textDecoration: 'none',
      }}
    >
      <Button variant="contained">選択</Button>
    </Link>
  )
}