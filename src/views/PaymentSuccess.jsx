import React from 'react';
import '../styles/checkout.css';
import { Link } from 'react-router-dom';

export default function PaymentSuccess() {
  const order = localStorage.getItem('cart');
  const orderItems = JSON.parse(order);
  const total = orderItems.cartTotal;
  const products = Object.values(orderItems.existingItems);
  const handleGoHome = () => {
    localStorage.removeItem('cart');
  };
  return (
    <div data-testid="checkout-success" className="checkout-success-container">
      <div className="checkout-cards-container">
        {products.map((item) => (
          <div className="checkout-card" key={item.id}>
            <img className="checkout-item-image" src={item.image} alt="item" />
            <p data-testid="checkout-item-name" className="checkout-item-name">
              Name: {item.productName}
            </p>
            <p
              data-testid="checkout-item-price"
              className="checkout-item-price"
            >
              Price: RWF{item.price}
            </p>
            <p
              data-testid="checkout-item-number"
              className="checkout-item-number"
            >
              Quantity: {item.quantity}
            </p>
          </div>
        ))}
      </div>
      <p className="checkout-total">Total Payment: RWF{total}</p>
      <p className="checkout-success-message">
        Payment Successful! Your order is being processed
      </p>
      <Link className="checkout-home" to="/" onClick={handleGoHome}>
        Click to go back Home
      </Link>
    </div>
  );
}
