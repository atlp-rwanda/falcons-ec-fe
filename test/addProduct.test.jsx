import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import store  from '../src/redux/store';
import ProductForm from '../src/components/ProductForm';

test('should render product form', async () => {
  render(
    <Provider store={store}>
      <ProductForm />
    </Provider>
  );

  await waitFor(() => {
    expect(screen.getByTestId('product-form')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Product name')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('Product Description')
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Product price')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Product quantity')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('29 Feb 2024')).toBeInTheDocument();

    const button = screen.getByText('Save');

    fireEvent.change(screen.getByPlaceholderText('Product name'), {
      target: { value: 'product 01' },
    });
    fireEvent.change(screen.getByPlaceholderText('Product Description'), {
      target: { value: 'this is product 01' },
    });

    fireEvent.change(screen.getByPlaceholderText('Product price'), {
      target: { value: '258' },
    });

    fireEvent.change(screen.getByPlaceholderText('Product quantity'), {
      target: { value: '12' },
    });

    fireEvent.change(screen.getByPlaceholderText('29 Feb 2024'), {
      target: { value: '2024-06-02' },
    });

    fireEvent.click(button);
    expect(button).toBeInTheDocument();
  });
});
