import { render, screen } from '@testing-library/react';
import App from './App';

test('renders initial screen', () => {
  render(<App />);
  // const logo = screen.getByRole("img");
  // expect(logo).toHaveAttribute("src", "slobbo_logo.png")

  const text = screen.getAllByText(/Slobbo/i)[0]
  expect(text).toBeInTheDocument()
});
