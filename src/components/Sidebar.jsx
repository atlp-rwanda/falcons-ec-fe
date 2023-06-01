/* eslint-disable jsx-a11y/label-has-associated-control */
//  /* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { home,logout, users,Logo, products_SVG,sales_SVG, Saling} from '../assets/index'
import '../styles/sidebar.css';
import dashboard_SVG from '../assets/dashboard.svg';
import getUserInfo from '../utils/getUserInfo';

 const Sidebar = () => {
  const [role, setRole] = useState(null)
  const location = useLocation();
  const [isActive, setisActive] = useState();
    
  useEffect(() =>{
    const  user = getUserInfo()
    if (user) {
      setRole(user.payload.role);
      
    }
  })
    useEffect(() =>{
      const path = location.pathname
      setisActive(path)
    })
      const menuItems = [
    {
      path: '/',
      name: 'Home',
      icon: home,
      scope: ['admin', 'seller', 'buyer'],
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      icon: dashboard_SVG,
      scope: ['admin', 'seller'],
    },
    {
      path: '/dashboard/orders',
      name: 'Orders',
      icon: sales_SVG,
      scope: ['buyer', 'admin'],
    },
    {
      path: '/dashboard/sales',
      name: 'sales',
      icon: Saling,
      scope: ['seller', 'admin'],
    },
    {
      path: '/dashboard/products',
      name: 'Products',
      icon: products_SVG,
      scope: ['seller', 'admin'],
    },
    {
      path: '/dashboard/users',
      name: 'users',
      icon: users,
      scope: ['admin'],
    },
  ];
  return (
    <>
    <input type="checkbox" id="checkBox" />
        <label htmlFor="checkBox" className="checkbtn">
          <i className="fa fa-bars" />
        </label>
    <div className="sidebar-container-dashboard">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt='falcons'/>
        </Link>
      </div>
      <ul className='ul-list'>
        <li>
         {menuItems.filter((items) => items.scope.includes(role)).map((item) =>{
           return (
             <Link to={item.path} key={item.name} className={`sidebar-links ${isActive ===item.path ? 'active' : ''}` } >
          <img src={item.icon} alt={item.name} />
          <p>{item.name}</p>
        </Link>
      )
    })}
        </li>  
       </ul>
      <button type='submit'>
        <img src={logout} alt='logout' className='sidebar-logout' />
        logout
      </button>
     </div>
    </>
  );
};

export default Sidebar;

