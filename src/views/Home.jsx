import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      This is the Home Page
      <div
        className="login"
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <Link to="login">Login</Link>
        <Link to="product/add">Create Product</Link>
      </div>
    </div>
  );
};

export default Home;
