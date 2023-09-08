import { createContext } from 'react';
import { TodoContextType } from '../types';

const TodosContext = createContext<TodoContextType>({
  todos: [],
  addTodoHandler: () => {},
  toggleTodoHandler: () => {},
});

export default TodosContext;
