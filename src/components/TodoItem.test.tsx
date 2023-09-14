import { render, screen } from '@testing-library/react';
import TodoItem from './TodoItem';
import { TodoItemType } from '../types';

describe('TodoItem component', () => {
  test('renders todo item', () => {
    const todo: TodoItemType = { id: '1', completed: false, name: 'Add more tests' };

    render(<TodoItem todo={todo} />);

    const newTodo = screen.getByText('Add more tests');

    expect(newTodo).toBeInTheDocument();
  });
});
