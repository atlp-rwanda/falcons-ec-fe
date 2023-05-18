import React from 'react';
import { Outlet } from 'react-router';
import NavBar from './NavBar';
import Footer from './Footer';
import logo from '../assets/icons/Logo.svg';
import BottomNavBar from './BottomNavBar';

const Layout = () => {
  return (
    <div className="layout">
      <header>
        <div className="welcome">
          <div className="navbar_logo">
            <a href="/">
              <img src={logo} alt="" />
            </a>
          </div>
          <p>Where shopping is always a pleasure.</p>
        </div>
        <NavBar />
      </header>
      <main className="main-container">
        <Outlet />
      </main>
      <BottomNavBar />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
