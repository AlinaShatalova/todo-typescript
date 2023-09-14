import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Todo App adds new task', () => {
  test('when user clicks "ADD" button', () => {
    render(<App />);

    const inputElem = screen.getByPlaceholderText('What needs to be done?');
    const addButton = screen.getByText(/add/i);
    userEvent.type(inputElem, 'add new tests');
    userEvent.click(addButton);

    const newTask = screen.getByText('add new tests');
    expect(newTask).toBeInTheDocument();
  });

  test('when user clicks  "Enter" key', async () => {
    render(<App />);

    const inputElem = screen.getByPlaceholderText('What needs to be done?');
    userEvent.type(inputElem, 'add new tests');
    await userEvent.keyboard('[Enter]');

    const newTask = screen.getByText('add new tests');
    expect(newTask).toBeInTheDocument();
  });
});

describe('App component', () => {
  test('renders todos title', () => {
    render(<App />);

    const titleElem = screen.getByText(/todos/i);

    expect(titleElem).toBeInTheDocument();
  });
});
