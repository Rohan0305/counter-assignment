import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

test('renders counter message', () => {
  render(<Counter />); 
  const message = screen.getByText(/Counter/i); 
  expect(message).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  render(<Counter />); 
  const count = screen.getByTestId('count'); 
  expect(count.textContent).toBe('0');
});

test('clicking + increments the count', () => {
  render(<Counter />); 
  const incrementButton = screen.getByText('+'); 
  const count = screen.getByTestId('count');

  fireEvent.click(incrementButton);
  expect(count.textContent).toBe('1');
});

test('clicking - decrements the count', () => {
  render(<Counter />); 
  const decrementButton = screen.getByText('-'); 
  const count = screen.getByTestId('count');

  fireEvent.click(decrementButton);
  expect(count.textContent).toBe('-1');
});