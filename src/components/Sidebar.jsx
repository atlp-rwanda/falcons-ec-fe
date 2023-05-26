/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/sidebar.css';
import { useEffect } from 'react';
import dashboard_SVG from '../assets/dashboard.svg';
import sales_SVG from '../assets/sales.svg';
import products_SVG from '../assets/products.svg';
import login_SVG from '../assets/login.svg';
import {Logo} from '../assets/index';
import getUserInfo from '../utils/getUserInfo';

const Sidebar = () => {
  const  user = getUserInfo()
  const {role} = user.payload
  const location = useLocation();
  const [isActive, setisActive] = useState();
    
    useEffect(() =>{
      const path = location.pathname
      setisActive(path)
    })
  const menuItems = [
    {
      path: '/dashboard',
      name: 'Dashboard',
      icon: dashboard_SVG,
      scope: ['admin', 'seller','buyer'],
    },
    {
      path: '/dashboard/orders',
      name: 'Orders',
      icon: sales_SVG,
      scope: ['buyer', 'admin'],
    },
    {
      path: '/dashboard/product/add',
      name: 'Products',
      icon: products_SVG,
      scope: ['seller', 'admin'],
    },
  ];
  return (
    <div>
      <input type="checkbox" id="checkBox" />
        <label htmlFor="checkBox" className="checkbtn">
          <i className="fa fa-bars" />
        </label>
    <div className='sidebar-container-dashboard'>
    <img src={Logo} className='logo-dash' alt='falcons'/>
      {menuItems.filter((items) => items.scope.includes(role)).map((item) =>{
        return (
          <Link to={item.path} key={item.name} className={`sidebar-links ${isActive ===item.path ? 'active' : ''}` } >
          <img src={item.icon} alt={item.name} />
          <span>{item.name}</span>
        </Link>
      )
    })}
    <button type='submit' className='logout'>
      <img src={login_SVG} alt='logout' />
      logout</button>
      </div>
    </div>
  );
};

export default Sidebar;
