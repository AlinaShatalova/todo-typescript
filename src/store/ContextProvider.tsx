import React, { useState, useMemo } from 'react';
import TodosContext from './context';
import { TodoContextType, TodoStatus } from '../types';
import { uniqueId } from 'lodash';

type ContextProviderPropsType = {
  children: JSX.Element;
};

const ContextProvider = ({ children }: ContextProviderPropsType) => {
  const [todos, setTodos] = useState([
    { id: uniqueId(), completed: false, name: 'Buy milk' },
    { id: uniqueId(), completed: false, name: 'Buy bread' },
  ]);

  const activeTasks = useMemo(() => {
    return todos.filter(todo => !todo.completed);
  }, [todos]);

  const completedTasks = useMemo(() => {
    return todos.filter(todo => todo.completed);
  }, [todos]);

  const [status, setStatus] = useState(TodoStatus.All);

  const addTodoHandler = (text: string): void => {
    const newTodo = {
      id: uniqueId(),
      completed: false,
      name: text,
    };

    setTodos([...todos, newTodo]);
  };

  const toggleTodoHandler = (id: string) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }

        return todo;
      })
    );
  };

  const changeStatusHandler = (currentStatus: TodoStatus) => {
    setStatus(currentStatus);
  };

  const removeCompletedHandler = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const contextValue: TodoContextType = {
    todos,
    status,
    activeTasks,
    completedTasks,
    addTodoHandler,
    toggleTodoHandler,
    changeStatusHandler,
    removeCompletedHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};

export default ContextProvider;
