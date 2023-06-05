/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import '../styles/cart.css';
import cartImage from '../assets/cart.svg';
import upward from '../assets/Upward.svg';
import downward from '../assets/Downward.svg';
import { getCart } from '../redux/slices/cart/getCart';
import spinner from '../assets/Icons/spinner.svg';
import { clearCart } from '../redux/slices/cart/clearCart';
import { deleteItemCart } from '../redux/slices/cart/deleteItemCart';
import { incrementCart } from '../redux/slices/cart/updateCart';
import { decrementCart } from '../redux/slices/cart/updateCart';

export default function Cart() {
  const dispatch = useDispatch();
  const { existingItems, cartTotal } = useSelector(
    (state) => state.getCart.cart
  );
  const [currentCart, setCurrentCart] = useState({});
  const [isLoading, setLoading] = useState(false);
  const clearingCart = useSelector((state) => state.clearCart.loading);
  const deletingItemCart = useSelector((state) => state.deleteItemCart.loading);
  const updatingItemCart = useSelector((state) => state.update.loading);
  const [cartCleared, setCartCleared] = useState(false);
  const [cartUpdated, setCartUpdated] = useState(false);

  useEffect(() => {
    dispatch(getCart());
    setCurrentCart(existingItems);
  }, [dispatch, isLoading]);

  useEffect(() => {
    if (cartCleared) {
      setCartCleared(false);
      dispatch(getCart());
    }
  }, [dispatch, cartCleared]);

  useEffect(() => {
    if (cartUpdated) {
      setCartUpdated(false);
      dispatch(getCart());
    }
  }, [dispatch, cartUpdated]);

  let items = {};
  if (existingItems !== undefined) {
    items = existingItems;
  }

  const handleClearCart = () => {
    dispatch(clearCart())
      .then(() => {
        setCartCleared(true);
      })
      .catch((error) => {
        toast.error('Failed to clear cart', error);
      });
  };

  const handleDeleteItemCart = async (id) => {
    setLoading(true);
    try {
      await dispatch(deleteItemCart(id));
      if (Object.values(existingItems).length === 1) {
        await dispatch(getCart());
      }
    } catch (error) {
      toast.error('Error while removing item from cart:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleIncrement = (id) => {
    dispatch(incrementCart(id)).then(() => {
      setCartUpdated(true);
    });
  };

  const handleDecrement = (id, quantity) => {
    if (quantity > 1) {
      dispatch(decrementCart(id)).then(() => {
        setCartUpdated(true);
      });
    } else {
      toast.warn('Quantity cannot be less than 1');
    }
  };

  return (
    <div className="cart-container" data-testid="cart-container">
      <div className="cart-header">
        <div className="cart-title">
          <p className="cart-name">Cart</p>
        </div>
      </div>
      <div className="cart-products-container">
        {cartTotal === 0 ? (
          <div className="empty-cart-container">
            <div className="cart-image">
              <img src={cartImage} alt="cart" className="cart-icon-cart" />
            </div>
            <div className="cart-message-container">
              <p className="cart-message">Cart is Empty</p>
            </div>
          </div>
        ) : (
          <div className="cart-filled-container" style={{ display: 'block' }}>
            <div className="cart-cards-container" data-testid="cart-card">
              {Object.values(items).map((item) => (
                <div className="cart-card" key={item.id}>
                  <img
                    className="cart-item-image"
                    src={item.image}
                    alt="cart-item"
                  />
                  <p className="cart-item-name">{item.productName}</p>
                  <p className="cart-item-price">${item.price}</p>
                  <div className="cart-item-quantity">
                    <button
                      data-testid="increment"
                      type="submit"
                      disabled={updatingItemCart}
                      onClick={() => handleIncrement(item.id, item.quantity)}
                      className="cart-item-increase"
                    >
                      <img src={upward} alt="upward-icon" />
                    </button>
                    <p className="cart-item-number">{item.quantity}</p>
                    <button
                      data-testid="decrement"
                      type="submit"
                      onClick={() => handleDecrement(item.id, item.quantity)}
                      disabled={updatingItemCart}
                      className="cart-item-decrease"
                    >
                      <img src={downward} alt="upward-icon" />
                    </button>
                  </div>
                  <button
                    type="submit"
                    className="cart-item-remove"
                    onClick={() => handleDeleteItemCart(item.id)}
                    disabled={deletingItemCart[item.id]}
                  >
                    {deletingItemCart[item.id] ? (
                      <img
                        src={spinner}
                        style={{ height: '25px' }}
                        alt="loader"
                      />
                    ) : (
                      'Remove'
                    )}
                  </button>
                </div>
              ))}
            </div>
            <div className="cart-payment-container">
              <div className="cart-total-payment">
                <p className="cart-total-title">Total</p>
                <p className="cart-total-amount">${cartTotal}</p>
              </div>
              <div className="cart-buttons-container">
                <button
                  type="submit"
                  className="cart-item-clear"
                  onClick={handleClearCart}
                  disabled={clearingCart}
                >
                  {clearingCart ? (
                    <img
                      src={spinner}
                      style={{
                        height: '30px',
                        filter: 'brightness(0) invert(1)',
                      }}
                      alt="loader"
                    />
                  ) : (
                    'CLEAR CART'
                  )}
                </button>
                <button type="submit" className="cart-item-checkout">
                  CHECKOUT
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
