import { memo, useContext } from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';
import { pink } from '@mui/material/colors';
import TodosContext from '../store/context';
import { TodoItemType } from '../types';

type TodoItemProps = {
  todo: TodoItemType;
};

const TodoItem = ({ todo }: TodoItemProps) => {
  const { toggleTodoHandler } = useContext(TodosContext);

  return (
    <FormControlLabel
      control={
        <Checkbox
          sx={{
            color: pink[600],
            '&.Mui-checked': {
              color: pink[200],
              '&, & + .MuiFormControlLabel-label': {
                textDecoration: 'line-through',
              },
            },
          }}
          checked={todo.completed}
          onChange={() => toggleTodoHandler(todo.id)}
        />
      }
      label={todo.name}
    />
  );
};

export default memo(TodoItem);
