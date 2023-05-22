import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/sidebar.css';
import dashboard_SVG from '../assets/dashboard.svg';
import sales_SVG from '../assets/sales.svg';
import products_SVG from '../assets/products.svg';
import settings_SVG from '../assets/settings.svg';
import login_SVG from '../assets/login.svg';
import logo_SVG from '../assets/Icons/Logo.svg';

export const Sidebar = () => {
  const active = useSelector((state) => state.sidebar.active);

  return (
    <div className="sidebar-container">
      <div className="logo">
        <Link to={'/'}>
          <img src={logo_SVG} />
        </Link>
      </div>
      <ul>
        <li className={active === 'dashboard' ? 'active' : ''}>
          <Link className="sidebar-links">
            <img src={dashboard_SVG} />
            <label>Dashboard</label>
          </Link>
        </li>
        <li className={active === 'sales' ? 'active' : ''}>
          <Link className="sidebar-links">
            <img src={sales_SVG} />
            <label>Sales</label>
          </Link>
        </li>
        <li className={active === 'products' ? 'active' : ''}>
          <Link className="sidebar-links">
            <img src={products_SVG} />
            <label>Products</label>
          </Link>
        </li>
        <li className={active === 'settings' ? 'active' : ''}>
          <Link className="sidebar-links">
            <img src={settings_SVG} />
            <label>Settings</label>
          </Link>
        </li>
        <li>
          <Link className="sidebar-links">
            <img src={login_SVG} />
            <label className="disabled">Logout</label>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
