import React from 'react';
import menu from '../assets/Icons/menu.svg';

const HomeNavBar = () => {
  return (
    <div className="home_nav_bar_container" data-testid="home_nav_bar">
      <div className="categories">
        <button className="all_categories" type="button">
          <img src={menu} alt="menu" className="menu" />
          ALL CATEGORIES
        </button>
        <div className="dropdown_content">
          <a href="/">Chairs</a>
          <a href="/">Tables</a>
          <a href="/">Desks</a>
        </div>
      </div>
      <div className="other_links">
        <div className="home">
          <a href="/">HOME</a>
        </div>
        <div className="about_us">
          <a href="/">ABOUT</a>
        </div>
        <div className="contact_us">
          <a href="/">CONTACT US</a>
        </div>
      </div>
    </div>
  );
};

export default HomeNavBar;
