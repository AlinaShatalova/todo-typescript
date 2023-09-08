import TodoList from './components/TodoList';
import {
  Box,
  CircularProgress,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import AddTodo from './components/AddTodo';
import ContextProvider from './store/ContextProvider';

function App() {
  return (
    <ContextProvider>
      <Container sx={{ margin: '0 auto', width: '600px', paddingTop: '5rem', }}>
        <Typography variant="h1">todos</Typography>
        <Box>
          <AddTodo />
          <TodoList />
        </Box>
      </Container>
    </ContextProvider>
  );
}

export default App;
