import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddTodo from './AddTodo';

describe('AddTodo component', () => {
  test('renders input', () => {
    render(<AddTodo />);

    const inputElem = screen.getByPlaceholderText('What needs to be done?');

    expect(inputElem).toBeInTheDocument();
  });

  test('displays value which is typed in add todo input', () => {
    render(<AddTodo />);

    const inputElem = screen.getByPlaceholderText('What needs to be done?');
    userEvent.type(inputElem, 'learn testing in react');

    expect(screen.getByPlaceholderText('What needs to be done?')).toHaveValue(
      'learn testing in react'
    );
  });
});
