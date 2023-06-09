/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../redux/slices/cart/getCart';
import '../styles/MainNavbar.css';

import {
  profile,
  notification,
  dashboard,
  cart,
  wishlist,
  home,
  Logo,
} from '../assets/index';

const NavBar = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  const cartState = useSelector((state) => state.getCart.cart);
  const existingItems = token ? cartState && cartState.existingItems : {};
  const [cartLength, setCartLength] = useState(0);
  useEffect(() => {
    let decoded = null;
    if (token) {
      decoded = jwt_decode(token);
      const { role } = decoded.payload;
      if (role === 'buyer') {
        dispatch(getCart());
      }
    }
    let items = {};
    if (existingItems !== undefined) {
      items = existingItems;
    }
    setCartLength(Object.keys(items).length);
  }, [dispatch, existingItems]);
  return (
    <div className="main-navbar-container" data-testid="navbar-test-id">
      <Link to="/">
        <img src={Logo} alt="falcons" className="logo-navbar" />
      </Link>
      <div className="icons-container">
        <div className="home-icon">
          <Link to="/">
            <img src={home} alt="home" />
          </Link>
        </div>
        <div className="dashboard-icon">
          <Link to="/dashboard">
            <img src={dashboard} alt="dashboard" />
          </Link>
        </div>
        <div className="cart-icon">
          <Link to="/cart">
            <img src={cart} alt="cart" />
          </Link>
          <span>{cartLength}</span>
        </div>
        <div className="notification-icon">
          <Link to="/notification">
            <img src={notification} alt="notifications" />
          </Link>
          <span>0</span>
        </div>
        <div className="profile-icon">
          <Link to="/profile">
            <img src={profile} alt="profile" />
          </Link>
        </div>
        <div className="wishlist-icon">
          <Link to="/wishlist">
            <img src={wishlist} alt="profile" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
