import { render, screen } from '@testing-library/react';
import TodoItem from './TodoItem';
import { TodoItemType } from '../types';

const todo: TodoItemType = { id: '1', completed: false, name: 'Buy milk' };

describe('TodoItem component', () => {
  test('renders todo item', () => {
    render(<TodoItem todo={todo} />);

    const newTodo = screen.getByText('Buy milk');

    expect(newTodo).toBeInTheDocument();
  });
});
