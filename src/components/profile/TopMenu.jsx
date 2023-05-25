/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import falcons from '../../assets/falcons.svg';
import logo from '../../assets/Icons/Logo.svg';

const TopMenu = () => {
  return (
    <div className="profile-navbar-container">
      <div className="navbar-links">
        <div className="navbar-logo">
          <img src={logo} className="logo" alt="avatar" />
          {/* <h3>falcons</h3> */}
        </div>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="chechbtn">
          <i className="fa fa-bars" />
        </label>
        <ul>
          <div className="links">
            <li>
              <Link to="/" className="links">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className="links">
                about
              </Link>
            </li>
            <li>
              <Link to="/" className="links">
                pages
              </Link>
            </li>
            <li>
              <Link to="/" className="links">
                contact
              </Link>
            </li>
            <li>
              <Link to="/" className="links">
                security
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default TopMenu;
