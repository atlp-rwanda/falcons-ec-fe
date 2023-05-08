import React from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <div>This is the Login Page</div>
      <div>
        <NavLink to="/">Back Home</NavLink>
      </div>
    </>
  );
};

export default Login;
