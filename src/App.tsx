import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Todos } from '@/components/Todos';
import { Users } from '@/components/Users';


export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path={"/:user_id/todos"} element={<Todos />} />
      </Routes>
    </Router>
  );
}