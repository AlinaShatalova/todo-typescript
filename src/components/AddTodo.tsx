import { useState, ChangeEvent, FormEvent, useContext } from 'react';
import { Box, Button, TextField } from '@mui/material';
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
    <Box
      component="form"
      noValidate
      style={{ paddingTop: '24px' }}
      onSubmit={submitHandler}
    >
      <TextField
        role="textbox"
        placeholder="What needs to be done?"
        value={value}
        onChange={changeTextHandler}
        fullWidth
        InputProps={{
          endAdornment: <Button type="submit">Add</Button>,
        }}
      ></TextField>
    </Box>
  );
};

export default AddTodo;
