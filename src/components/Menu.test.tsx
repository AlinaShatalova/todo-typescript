import { render, screen } from '@testing-library/react';
import Menu from './Menu';

describe('Menu component', () => {
  test('renders items left counter', () => {
    render(<Menu />);

    const itemsLeft = screen.getByText('left', { exact: false });

    expect(itemsLeft).toBeInTheDocument();
  });

  test('renders "Clear completed" button', () => {
    render(<Menu />);

    const clearButton = screen.getByText('Clear completed');

    expect(clearButton).toBeInTheDocument();
  });
});
