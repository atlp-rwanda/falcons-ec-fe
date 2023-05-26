import React from 'react';
import '../styles/bottomNavBar.css';
import { Link } from 'react-router-dom';
import home_SVG from '../assets/home.svg';
import loginbtm_SVG from '../assets/login-bottom.svg';
import userTick_SVG from '../assets/how_to_reg.svg';
import comment_SVG from '../assets/comment.svg';
import { dashboard, home, cart,logo_SVG, notification } from '../assets';
import getUserInfo from '../utils/getUserInfo';

const BottomNavBar = () => {
  const  user = getUserInfo()
  const {role} = user.payload
  const menuItems = [
    {
      path: '/',
      name: 'home',
      icon: home,
      scope: ['seller', 'admin', 'buyer'],
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      icon: dashboard,
      scope: ['admin', 'seller','buyer'],
    },
    {
      path: '#',
      name: 'notification',
      icon: notification,
      scope: ['buyer', 'admin'],
    },
    {
      path: '#',
      name: 'cart',
      icon: cart,
      scope: ['seller', 'admin'],
    },
    {
      path: '#',
      name: 'logout',
      icon: logo_SVG,
      scope: ['seller', 'admin', 'buyer'],
    },
    
  ];
  return (
    <div className="bottomnav-container">
      <div className="links-container">
      {menuItems.filter((items) => items.scope.includes(role)).map((item) =>{
        return (
          <Link to={item.path} key={item.name} className='sidebar-links'>
          <img src={item.icon} alt={item.name} />
        </Link>
      )
    })}
    </div>
    {/* <button type='submit' className='logout'>
      <img src={logo_SVG} alt='logout' />
      </button> */}
      <div className='the-bottom-line' />
    </div>
  );
};

export default BottomNavBar;
