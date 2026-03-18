import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App Component', () => {
  it('renders initial count 0', () => {
    render(<App />);
    expect(screen.getByText('Count is 0')).toBeInTheDocument();
  });

  it('increments count when increment button is clicked', async () => {
    const user = userEvent.setup();
    render(<App />);

    const incrementButton = screen.getByRole('button', { name: /increment/i });
    await user.click(incrementButton);

    expect(screen.getByText('Count is 1')).toBeInTheDocument();
  });

  it('decrements count when decrement button is clicked', async () => {
    const user = userEvent.setup();
    render(<App />);

    // Initial state is 0, so decrement should satisfy logic
    const decrementButton = screen.getByRole('button', { name: /decrement/i });
    await user.click(decrementButton);

    expect(screen.getByText('Count is -1')).toBeInTheDocument();
  });

  it('resets count when reset button is clicked', async () => {
    const user = userEvent.setup();
    render(<App />);

    const incrementButton = screen.getByRole('button', { name: /increment/i });
    await user.click(incrementButton);
    await user.click(incrementButton);
    expect(screen.getByText('Count is 2')).toBeInTheDocument();

    const resetButton = screen.getByRole('button', { name: /reset/i });
    await user.click(resetButton);

    expect(screen.getByText('Count is 0')).toBeInTheDocument();
  });
});
