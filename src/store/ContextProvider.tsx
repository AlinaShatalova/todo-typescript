import React, { useState } from 'react';
import TodosContext from './context';
import { TodoContextType } from '../types';
import { uniqueId } from 'lodash';

type ContextProviderPropsType = {
  children: JSX.Element;
};

const ContextProvider = ({ children }: ContextProviderPropsType) => {
  const [todos, setTodos] = useState([
    { id: uniqueId(), completed: false, name: 'Buy milk' },
    { id: uniqueId(), completed: false, name: 'Buy bread' },
  ]);

  const addTodoHandler = (text: string): void => {
    const newTodo = {
      id: uniqueId(),
      completed: false,
      name: text,
    };

    setTodos([...todos, newTodo]);
  };

  const toggleTodoHandler = (id: string) => {
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    }))
  };

  const contextValue: TodoContextType = {
    todos,
    addTodoHandler,
    toggleTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};

export default ContextProvider;
