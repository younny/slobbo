import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router
} from "react-router-dom";
import HomePage from './HomePage';

const mockStore = configureStore()

const store = mockStore({ posts: [], filters: []})

test('renders home screen', () => {

  render(<Provider store={store}><Router><HomePage /></Router></Provider>);
  const linkElement = screen.getAllByText(/posts/i)[0];
  expect(linkElement).toHaveTextContent("Posts")
});
