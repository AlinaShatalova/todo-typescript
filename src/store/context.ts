import { createContext } from 'react';
import { TodoContextType, TodoStatus } from '../types';

const TodosContext = createContext<TodoContextType>({
  todos: [],
  status: TodoStatus.All,
  activeTasks: [],
  completedTasks: [],
  addTodoHandler: () => {},
  toggleTodoHandler: () => {},
  changeStatusHandler: () => {},
  removeCompletedHandler: () => {},
});

export default TodosContext;
