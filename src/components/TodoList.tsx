import { useContext } from 'react';
import { FormGroup } from '@mui/material';
import TodosContext from '../store/context';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { todos } = useContext(TodosContext);

    return (
        <FormGroup>
            {todos.map((todo, index) => <TodoItem key={todo.id} todo={todo} />
            ) }
        </FormGroup>
    )
};

export default TodoList;