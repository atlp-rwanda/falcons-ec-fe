/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from '../src/components/Counter';
import { Provider } from 'react-redux';
import { store } from '../src/redux/store';

describe('test landing page', () => {
  test('should test landing page', async () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    expect(screen.getByTestId('counter')).toBeInTheDocument();
    const button = screen.getByRole('button', { name: 'Increment' });
    const input = screen.getByPlaceholderText('Enter a number');
    fireEvent.click(button);
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });
});
