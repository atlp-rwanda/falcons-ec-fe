import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      This is the Home Page
      <div className="signup">
        <Link to="signup">Signup</Link>
      </div>
    </div>
  );
};

export default Home;
