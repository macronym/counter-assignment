// import necessary react testing library helpers here
// import the Counter component here
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../components/App';
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here

  // ^^^^ Components cannot be rendered here, but rather before each unit test ^^^^^
  console.log("Running test");
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument(); 
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const initialCount = screen.getByTestId('count');
  expect(initialCount).toHaveTextContent('0');
});

test('clicking + increments the count', async () => {
  render(<Counter />);
  const incrementButton = screen.getByText('+');
  const count = screen.getByTestId('count');
  await userEvent.click(incrementButton);
  expect(count).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const decrementButton = screen.getByText('-');
  const count = screen.getByTestId('count');
  userEvent.click(decrementButton);
  expect(count).toHaveTextContent('-1');
});
