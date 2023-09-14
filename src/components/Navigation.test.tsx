import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Navigation from './Navigation';

describe('Navigation component', () => {
  test('renders "All" button', () => {
    render(<Navigation />);

    const allButton = screen.getByText('All');

    expect(allButton).toBeInTheDocument();
  });

  test('renders "Active" button', () => {
    render(<Navigation />);

    const activeButton = screen.getByText('Active');

    expect(activeButton).toBeInTheDocument();
  });

  test('renders "Completed" button', () => {
    render(<Navigation />);

    const completedButton = screen.getByText('Completed');

    expect(completedButton).toBeInTheDocument();
  });

  test('makes "Active" button selected when user clicks on it', () => {
    render(<Navigation />);

    const showActiveButton = screen.getByText('Active');
    userEvent.click(showActiveButton);

    expect(screen.getByTestId('active-button')).toHaveClass('Mui-selected');
  });
});
