import { vitest, screen } from 'vitest';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import store from '../src/redux/store';
import LandingPage from '../src/views/LandingPage';

vitest('test signup page', ({ render }) => {
  render(
    <Provider store={store}>
      <LandingPage />
    </Provider>
  );

  expect(screen.getByTestId('landing-page')).toBeInTheDocument();
});
