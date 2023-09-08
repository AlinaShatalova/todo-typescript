import { useContext, useMemo } from 'react';
import { FormGroup, Typography } from '@mui/material';
import { TodoStatus } from '../types';
import TodosContext from '../store/context';
import TodoItem from './TodoItem';

const TodoList = () => {
    const { todos, status, activeTasks, completedTasks } =
      useContext(TodosContext);

  const todosToRender = useMemo(() => {
    switch (status) {
      case TodoStatus.Active:
        return activeTasks;
      case TodoStatus.Completed:
        return completedTasks;
      default:
        return todos;
    }
  }, [todos, status, activeTasks, completedTasks]);

  return (
    <FormGroup sx={{ paddingTop: '16px'}}>
      {todosToRender.length ? (
        todosToRender.map(todo => <TodoItem key={todo.id} todo={todo} />)
      ) : (
        <Typography sx={{ fontStyle: 'italic' }}>No tasks</Typography>
      )}
    </FormGroup>
  );
};

export default TodoList;
