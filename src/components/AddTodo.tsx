import { useState, ChangeEvent, FormEvent, useContext } from 'react';
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Divider,
  FormControl,
  Grid,
  Input,
  OutlinedInput,
  TextField,
  Typography,
} from '@mui/material';
import TodosContext from '../store/context';

const AddTodo = () => {
  const { addTodoHandler } = useContext(TodosContext);
  const [value, setValue] = useState<string>('');

  const changeTextHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
  
    if (value.trim()) {
      addTodoHandler(value);
      setValue('');
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <FormControl fullWidth>
        <Input
          placeholder="What needs to be done?"
          value={value}
          onChange={changeTextHandler}
          endAdornment={<Button type="submit">Add</Button>}
        />
      </FormControl>
    </form>
  );
};

export default AddTodo;
