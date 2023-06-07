/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import '../styles/MainNavbar.css';
import { Link } from 'react-router-dom';
import { profile, notification, dashboard,
   cart, wishlist, home, Logo} from '../assets/index';

const NavBar = () => {
  return (
<div className='main-navbar-container' data-testid='navbar-test-id'>
      <Link to='/'>
     <img src={Logo} alt='falcons' className='logo-navbar' />
      </Link>
     <div className='icons-container'>
     <div className='home-icon'>
        <Link to='/'>
     <img src={home} alt='home' />
        </Link>
        </div>
     <div className='dashboard-icon'>
        <Link to='/dashboard'>
     <img src={dashboard} alt='dashboard' />
        </Link>
        </div>
      <div className='cart-icon'>
        <Link to='/cart'>
     <img src={cart} alt='cart' />
        </Link>
        <span>0</span>
      </div>
      <div className='notification-icon'>
        <Link to='/notification'>
     <img src={notification} alt='notifications' />
        </Link>
     <span>0</span>
      </div>
      <div className='profile-icon'>
        <Link to='/profile'>
     <img src={profile} alt='profile' />
        </Link>
      </div>
      <div className='wishlist-icon'>
        <Link to='/wishlist'>
     <img src={wishlist} alt='wishlist' />
        </Link>
      </div>
     </div>
    </div>
  )
}

export default NavBar