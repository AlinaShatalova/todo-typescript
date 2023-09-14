import { useState, useContext } from 'react';
import { List, ListItemButton, ListItemText } from '@mui/material';
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
      >
        <ListItemText primary="All" />
      </ListItemButton>
      <ListItemButton
        selected={selectedItem === TodoStatus.Active}
        onClick={() => handleListItemClick(TodoStatus.Active)}
        data-testid='active-button'
      >
        <ListItemText primary="Active" />
      </ListItemButton>
      <ListItemButton
        selected={selectedItem === TodoStatus.Completed}
        onClick={() => handleListItemClick(TodoStatus.Completed)}
      >
        <ListItemText primary="Completed" />
      </ListItemButton>
    </List>
  );
};

export default Navigation;
