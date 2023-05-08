import React from 'react';
import { Outlet } from 'react-router';
import NavBar from './NavBar';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="layout">
      <header>
        <NavBar />
      </header>
      <main className="main-container">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
