import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination, SellerProduct, Sidebar } from '../components';
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

import '../styles/SellerDashboard.css';
import { fetchSellerProducts } from '../redux/slices/sellerProducts';

const SellerDashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const products = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSellerProducts({ page: currentPage, limit: 2 }));
  }, [currentPage]);
  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="seller_dashboard" data-testid="seller_dashboard">
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
        {products?.loading ? (
          <div className="seller_products_list">
            <div className="seller-products-container">
              <img src={spinner} alt="loader" />
            </div>
            ;
          </div>
        ) : null}
        {products && !products.loading && (
          <div className="seller_products_list" data-testid="seller_products_list">
            <div className="seller-products-container">
              {products?.products?.Products?.map((product) => (
                <SellerProduct key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
        <Pagination
          currentPage={currentPage}
          totalPages={products.products.totalPages}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default SellerDashboard;
