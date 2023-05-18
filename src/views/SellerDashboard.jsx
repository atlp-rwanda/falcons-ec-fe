import React, { useState } from 'react';

import { useGetProductsQuery } from '../redux/slices/products';
import { SellerProduct, Sidebar } from '../components';
import search from '../assets/icons/search_dashboard.svg';
import truck from '../assets/icons/truck.svg';
import wish from '../assets/icons/wish.svg';
import expired from '../assets/icons/expired.svg';
import menu from '../assets/icons/menu.svg';
import bell from '../assets/icons/bell.svg';
import avatar from '../assets/icons/avatar.svg';
import left_arrow from '../assets/icons/left-arrow.svg';
import right_arrow from '../assets/icons/right-arrow.svg';
import next from '../assets/icons/next.svg';
import spinner from '../assets/icons/spinner.svg';


import '../sass/SellerDashboard.scss';

const SellerDashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { isLoading, error, data } = useGetProductsQuery({
    page: currentPage,
  });
  // const totalPages =data.Products.length;
  const totalPages = 1;
  const productIndex = currentPage - 1;
  // const product1 = data.Products[productIndex];
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  if (isLoading || !data) {
    return (
      <div className="seller_dashboard">
        <Sidebar />
        <div className="seller_dashboard_container">
          <div className="seller_dashboard_header">
            <div className="total_products">
              <p className="total_products_title">Total Products</p>
              <p className="total_products_number">111</p>
            </div>
            <div className="search_seller_dashboard">
              <form>
                <button className="search_seller_dashboard_btn" type="button">
                  <img src={search} alt="search" />
                </button>
                <input
                  type="text"
                  name="search_field"
                  className="search_dashboard"
                  placeholder="Search"
                />
              </form>
            </div>
            <div className="icons_seller_dashboard">
              <div className="bell_seller_dashboard">
                <img src={bell} alt="" className="bell_icon_seller_dashboard" />
              </div>
              <div className="avatar_seller_dashboard">
                <img
                  src={avatar}
                  alt=""
                  className="avatar_icon_seller_dashboard"
                />
              </div>
            </div>
          </div>

          <div className="cards">
            <div className="available">
              <img src={truck} alt="truck" />
              <p className="card_title">Available</p>
              <p className="card_number">67</p>
            </div>
            <div className="wished">
              <img src={wish} alt="wish" />
              <p className="card_title">Wished</p>
              <p className="card_number">09</p>
            </div>
            <div className="expired">
              <img src={expired} alt="expired" />
              <p className="card_title">Expired</p>
              <p className="card_number">35</p>
            </div>
          </div>
          <div className="add_product">
            <button type="button" className="add_product_button">
              <a href="/add-product">
                <span>+ </span>Add new product
              </a>
            </button>
          </div>
          <div className="seller_products_list">
            <div className="seller-products-container">
              <img src={spinner} alt="loader" />
            </div>
            ;
          </div>
          <div className="pagination">
            <div className="next-page-button">
              <button
                type="button"
                className="next-page" // Added the "next-page" class here
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
              >
                Next Page
                <img src={next} alt="next" className="next" />
              </button>
            </div>
            <div className="current-page">
              <p className="page">Page</p>
              <button type="button">{currentPage}</button>
              <p className="total-pages">of {totalPages}</p>
            </div>
            <div className="pagination-controls">
              <button
                type="button"
                className="next-page-arrow"
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
              >
                <img src={left_arrow} alt="next" />
              </button>
              <button
                type="button"
                className="next-page-arrow"
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
              >
                <img src={right_arrow} alt="next" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="products-container">
        Oops!🙊🙊Something went wrong....
        <p>{error.message}</p>
      </div>
    );
  }
  return (
    <div className="seller_dashboard">
      <Sidebar />
      <div className="seller_dashboard_container">
        <div className="seller_dashboard_header">
          <div className="total_products">
            <p className="total_products_title">Total Products</p>
            <p className="total_products_number">111</p>
          </div>
          <div className="search_seller_dashboard">
            <form>
              <button className="search_seller_dashboard_btn" type="button">
                <img src={search} alt="search" />
              </button>
              <input
                type="text"
                name="search_field"
                className="search_dashboard"
                placeholder="Search"
              />
            </form>
          </div>
          <div className="icons_seller_dashboard">
            <div className="bell_seller_dashboard">
              <img src={bell} alt="" className="bell_icon_seller_dashboard" />
            </div>
            <div className="avatar_seller_dashboard">
              <img
                src={avatar}
                alt=""
                className="avatar_icon_seller_dashboard"
              />
            </div>
             
          </div>
        </div>

        <div className="cards">
          <div className="available">
            <img src={truck} alt="truck" />
            <p className="card_title">Available</p>
            <p className="card_number">67</p>
          </div>
          <div className="wished">
            <img src={wish} alt="wish" />
            <p className="card_title">Wished</p>
            <p className="card_number">09</p>
          </div>
          <div className="expired">
            <img src={expired} alt="expired" />
            <p className="card_title">Expired</p>
            <p className="card_number">35</p>
          </div>
        </div>
        <div className="add_product">
          <button type="button" className="add_product_button">
            <a href="/add-product">
              <span>+ </span>Add new product
            </a>
          </button>
        </div>
        <div className="seller_products_list">
          <div className="seller-products-container">
            {data.Products.map((product) => (
              <SellerProduct key={product.id} product={product} />
            ))}
          </div>
        </div>
        <div className="pagination">
          <div className="next-page-button">
            <button
              type="button"
              className="next-page" // Added the "next-page" class here
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
            >
              Next Page
              <img src={next} alt="next" className="next" />
            </button>
          </div>
          <div className="current-page">
            <p className="page">Page</p>
            <button type="button">{currentPage}</button>
            <p className="total-pages">of {totalPages}</p>
          </div>
          <div className="pagination-controls">
            <button
              type="button"
              className="next-page-arrow"
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
            >
              <img src={left_arrow} alt="next" />
            </button>
            <button
              type="button"
              className="next-page-arrow"
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
            >
              <img src={right_arrow} alt="next" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
