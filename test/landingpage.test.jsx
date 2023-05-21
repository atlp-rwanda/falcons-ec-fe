/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../src/redux/store';
import LandingPage from '../src/views/LandingPage';

test('should test landing page', async () => {
  render(
    <Provider store={store}>
      <LandingPage />
    </Provider>
  );

  await waitFor(
    async () => {
      expect(await screen.findByTestId('landing-page')).toBeInTheDocument();
      expect(
        await screen.findByTestId('products-container')
      ).toBeInTheDocument();
      expect(await screen.findByTestId('products-heading')).toBeInTheDocument();
      expect(await screen.findByTestId('products_list')).toBeInTheDocument();
      expect(await screen.findByTestId('search-bar')).toBeInTheDocument();
      expect(await screen.findByTestId('search')).toBeInTheDocument();
      expect(await screen.findByTestId('banner')).toBeInTheDocument();

      expect(await screen.findByTestId('home_nav_bar')).toBeInTheDocument();
    },
    { timeout: 5000 }
  );
});
