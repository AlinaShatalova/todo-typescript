import TodoList from './components/TodoList';
import {
  Box,
  Container,
  Typography,
} from '@mui/material';
import AddTodo from './components/AddTodo';
import Menu from './components/Menu';
import ContextProvider from './store/ContextProvider';

function App() {
  return (
    <ContextProvider>
      <Container sx={{ margin: '0 auto', width: '600px', paddingTop: '5rem', }}>
        <Typography variant="h1">todos</Typography>
        <Box>
          <Menu />
          <AddTodo />
          <TodoList />
        </Box>
      </Container>
    </ContextProvider>
  );
}

export default App;
