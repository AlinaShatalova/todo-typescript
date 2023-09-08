import { useState, ChangeEvent, FormEvent, useContext } from 'react';
import { Button, FormControl, OutlinedInput } from '@mui/material';
import { pink } from '@mui/material/colors';
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
    <form style={{ paddingTop: '24px' }} onSubmit={submitHandler}>
      <FormControl fullWidth>
        <OutlinedInput
          placeholder="What needs to be done?"
          value={value}
          onChange={changeTextHandler}
          endAdornment={
            <Button
              type="submit"
              sx={{
                color: pink[400],
                '&:hover': {
                  backgroundColor: pink[50],
                },
              }}
            >
              Add
            </Button>
          }
        />
      </FormControl>
    </form>
  );
};

export default AddTodo;
