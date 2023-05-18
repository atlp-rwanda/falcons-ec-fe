import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/bottomNavBar.css';
import home_SVG from '../assets/icons/home.svg';
import loginbtm_SVG from '../assets/icons/login-bottom.svg';
import userTick_SVG from '../assets/icons/how_to_reg.svg';
import comment_SVG from '../assets/icons/comment.svg';

const BottomNavBar = () => {
  return (
    <div className="bottomnav-container">
      <div className="links-container">
        <Link className="link" to={'#'}>
          <img src={home_SVG} />
        </Link>
        <Link className="link" to={'#'}>
          <img src={loginbtm_SVG} />
        </Link>
        <Link className="link" to={'#'}>
          <img src={userTick_SVG} />
        </Link>
        <Link className="link" to={'#'}>
          <img src={comment_SVG} />
        </Link>
      </div>
      <div className="the-bottom-line" />
    </div>
  );
};

export default BottomNavBar;
