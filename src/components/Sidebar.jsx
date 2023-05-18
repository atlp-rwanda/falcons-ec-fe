import React from 'react';
import '../styles/sidebar.css';
import dashboard_SVG from '../assets/icons/dashboard.svg';
import sales_SVG from '../assets/icons/sales.svg';
import products_SVG from '../assets/icons/products.svg';
import settings_SVG from '../assets/icons/settings.svg';
import login_SVG from '../assets/icons/login.svg';
import logo_SVG from '../assets/icons/Logo.svg';

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <ul>
        <li>
          <div className="logo">
            <a href="/">
              <img src={logo_SVG} />
            </a>{' '}
          </div>
        </li>
        <li>
          <img src={dashboard_SVG} />
          <label>Dashboard</label>
        </li>
        <li>
          <img src={sales_SVG} />
          <label>Sales</label>
        </li>
        <li className="active">
          <img src={products_SVG} />
          <label>Products</label>
        </li>
        <li>
          <img src={settings_SVG} />
          <label>Settings</label>
        </li>
        <li>
          <img src={login_SVG} />
          <label className="disabled">Logout</label>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
