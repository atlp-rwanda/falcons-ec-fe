import React from 'react';
import { Outlet } from 'react-router';
import { Sidebar } from '../Sidebar';
import BottomNavBar from '../BottomNavBar';
import '../../styles/productLayout.css';

export const ProductLayout = () => {
  return (
    <div className="product-layout">
      <Sidebar />
      <div className="product-content">
        <main className="main-container">
          <Outlet />
        </main>
        <BottomNavBar />
      </div>
    </div>
  );
};
