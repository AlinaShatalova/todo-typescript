import { useState, useContext } from 'react';
import { List, ListItemButton, ListItemText } from '@mui/material';
import { pink } from '@mui/material/colors';
import TodosContext from '../store/context';
import { TodoStatus } from '../types';

const Navigation = () => {
  const { changeStatusHandler } = useContext(TodosContext);
  const [selectedItem, setSelectedItem] = useState(TodoStatus.All);

  const handleListItemClick = (status: TodoStatus) => {
    setSelectedItem(status);
    changeStatusHandler(status);
  };

  return (
    <List
      component="nav"
      sx={{ display: 'flex', justifyContent: 'space-between' }}
    >
      <ListItemButton
        selected={selectedItem === TodoStatus.All}
        onClick={() => handleListItemClick(TodoStatus.All)}
        sx={{
          '&.Mui-selected': {
            backgroundColor: pink[50],
            '&:hover': {
              backgroundColor: pink[100],
            },
          },
        }}
      >
        <ListItemText primary="All" />
      </ListItemButton>
      <ListItemButton
        selected={selectedItem === TodoStatus.Active}
        onClick={() => handleListItemClick(TodoStatus.Active)}
        sx={{
          '&.Mui-selected': {
            backgroundColor: pink[100],
            '&:hover': {
              backgroundColor: pink[50],
            },
          },
        }}
      >
        <ListItemText primary="Active" />
      </ListItemButton>
      <ListItemButton
        selected={selectedItem === TodoStatus.Completed}
        onClick={() => handleListItemClick(TodoStatus.Completed)}
        sx={{
          '&.Mui-selected': {
            backgroundColor: pink[100],
            '&:hover': {
              backgroundColor: pink[50],
            },
          },
        }}
      >
        <ListItemText primary="Completed" />
      </ListItemButton>
    </List>
  );
};

export default Navigation;
