import { useContext } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { pink } from '@mui/material/colors';
import Navigation from './Navigation';
import TodosContext from '../store/context';

const Menu = () => {
  const { activeTasks, removeCompletedHandler } = useContext(TodosContext);

  const tasksLeft =
    activeTasks.length === 1
      ? `${activeTasks.length} item left`
      : `${activeTasks.length} items left`;

  return (
    <Box
      pt={2}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Typography>{tasksLeft}</Typography>
      <Navigation />
      <Button
        variant="outlined"
        onClick={removeCompletedHandler}
        sx={{
          color: pink[400],
          borderColor: pink[200],
          '&:hover': {
            backgroundColor: pink[50],
            borderColor: pink[300],
          },
        }}
      >
        Clear completed
      </Button>
    </Box>
  );
};

export default Menu;
