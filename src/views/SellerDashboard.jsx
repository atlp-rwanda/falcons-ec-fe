import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PaginationDashboard, SellerProduct, Sidebar } from '../components';
import search from '../assets/Icons/search_dashboard.svg';
import truck from '../assets/Icons/truck.svg';
import wish from '../assets/Icons/wish.svg';
import expired from '../assets/Icons/expired.svg';
import menu from '../assets/Icons/menu.svg';
import bell from '../assets/Icons/bell.svg';
import avatar from '../assets/Icons/avatar.svg';
import left_arrow from '../assets/Icons/left-arrow.svg';
import right_arrow from '../assets/Icons/right-arrow.svg';
import next from '../assets/Icons/next.svg';
import spinner from '../assets/Icons/spinner.svg';

import '../styles/SellerDashboard.css';
import { fetchSellerProducts } from '../redux/slices/sellerProducts';
import DashboardHeader from '../components/DashboardHeader';

const SellerDashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const products = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSellerProducts({ page: currentPage, limit: 10 }));
  }, [currentPage]);
  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="seller_dashboard" data-testid="seller_dashboard">
      <div className="seller_dashboard_container">
        <DashboardHeader text='total products 111' className='total_products'/>
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
            <a href="/dashboard/products/add">
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
          <div
            className="seller_products_list"
            data-testid="seller_products_list"
          >
            <div className="seller-products-container">
              {products?.products?.Products?.map((product) => (
                <SellerProduct key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
        <PaginationDashboard
          currentPage={currentPage}
          totalPages={products.products.totalPages}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default SellerDashboard;
