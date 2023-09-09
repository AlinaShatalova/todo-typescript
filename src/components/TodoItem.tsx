import { memo, useContext } from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';
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
            '&.Mui-checked': {
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
