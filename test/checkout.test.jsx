import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import PaymentFailed from '../src/views/PaymentFailed';
import PaymentSuccess from '../src/views/PaymentSuccess';

describe('PaymentFailed', () => {
  beforeEach(() => {
    localStorage.setItem('cart', 'mock-cart-item');
  });

  afterEach(() => {
    localStorage.removeItem('cart');
  });

  test('renders failure message and handles "Go back Home" click', () => {
    render(
      <BrowserRouter>
        <PaymentFailed />
      </BrowserRouter>
    );

    expect(screen.getByText(/payment canceled/i)).toBeInTheDocument();

    fireEvent.click(screen.getByText(/click to go back home/i));

    expect(localStorage.getItem('cart')).toBeNull();
  });
});
describe('PaymentSuccess', () => {
  beforeEach(() => {
    const orderItems = {
      cartTotal: 100,
      existingItems: {
        1: {
          id: 1,
          image: 'image-url',
          productName: 'Product 1',
          price: 10,
          quantity: 2,
        },
        2: {
          id: 2,
          image: 'image-url',
          productName: 'Product 2',
          price: 20,
          quantity: 3,
        },
      },
    };
    localStorage.setItem('cart', JSON.stringify(orderItems));
  });

  afterEach(() => {
    localStorage.removeItem('cart');
  });

  test('renders success message and order details', () => {
    render(
      <BrowserRouter>
        <PaymentSuccess />
      </BrowserRouter>
    );

    expect(screen.getByText(/payment successful/i)).toBeInTheDocument();

    expect(screen.getAllByTestId('checkout-item-name'));
    expect(screen.getByText('Name: Product 1')).toBeInTheDocument();

    expect(screen.getAllByTestId('checkout-item-price'));
    expect(screen.getByText('Price: RWF10')).toBeInTheDocument();

    expect(screen.getAllByTestId('checkout-item-number'));
    expect(screen.getByText('Quantity: 2')).toBeInTheDocument();

    expect(screen.getAllByTestId('checkout-item-name'));
    expect(screen.getByText('Name: Product 2')).toBeInTheDocument();

    expect(screen.getAllByTestId('checkout-item-price'));
    expect(screen.getByText('Price: RWF20')).toBeInTheDocument();

    expect(screen.getAllByTestId('checkout-item-number'));
    expect(screen.getByText('Quantity: 3')).toBeInTheDocument();

    expect(screen.getByText(/total payment/i)).toHaveTextContent(
      'Total Payment: RWF100'
    );
  });

  test('removes cart item from localStorage when clicking "Go back Home"', () => {
    render(
      <BrowserRouter>
        <PaymentSuccess />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByText(/click to go back home/i));

    expect(localStorage.getItem('cart')).toBeNull();
  });
});
