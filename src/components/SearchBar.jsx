import React from 'react';
import arrow from '../assets/icons/arrow.svg';
import search from '../assets/icons/search.svg';
import cart from '../assets/icons/cart.svg';
import avatar from '../assets/icons/avatar.svg';
import bell from '../assets/icons/bell.svg';
import Chat from '../assets/icons/Chat.svg';
import menu from '../assets/icons/menu.svg';

import logo from '../assets/icons/Logo.svg';

const SearchBar = () => {
  return (
    <div className="search_bar" data-testid="search-bar">
      <div className="landing-page-logo" data-testid="logo">
        <a href="/">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="search" data-testid="search">
        <form>
          <input
            type="text"
            name="search_field"
            className="search_field"
            placeholder="Search"
          />
          <div className="search_categories">
            <button className="categories_to_search" type="button">
              Categories <img src={arrow} alt="" className="arrow" />
              <div className="dropdown-content">
                <a href="/">Chairs</a>
                <a href="/">Tables</a>
                <a href="/">Desks</a>
              </div>
            </button>
          </div>
          <button className="search-btn" type="submit">
            <img src={search} alt="search" />
          </button>
        </form>
      </div>

      <div className="icons">
        <div className="cart">
          <img src={cart} alt="" className="cart_icon" />
        </div>
        <div className="avatar">
          <img src={avatar} alt="" className="avatar_icon" />
        </div>
        <div className="bell">
          <img src={bell} alt="" className="bell_icon" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
