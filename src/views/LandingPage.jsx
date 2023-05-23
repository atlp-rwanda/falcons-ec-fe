import React, { useEffect, useState } from 'react';
import {
  HeroBanner,
  HomeNavBar,
  Pagination,
  Product,
  SearchBar,
} from '../components';
import spinner from '../assets/Icons/spinner.svg';
import { fetchProducts } from '../redux/slices/LandingPage';
import { useDispatch, useSelector } from 'react-redux';

const LandingPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const products = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts({ page: currentPage, limit: 10 }));
  }, [currentPage]);
  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  console.log(products);

  return (
    <div data-testid="landing-page">
      <SearchBar data-testid="search-bar" />
      <HomeNavBar data-testid="home-nav-bar" />
      <HeroBanner data-testid="hero-banner" />

      <div className="products_list" data-testid="products_list">
        <h1 className="products_heading" data-testid="products-heading">
          OUR PRODUCTS
        </h1>
        {products?.loading ? (
          <div className="products-container" data-testid="products-container">
            <img
              src={spinner}
              style={{ height: '55px' }}
              alt="loader"
              data-testid="loader-container"
            />
          </div>
        ) : null}
        {products && !products.loading && (
          <div className="products-container" data-testid="products-container">
            {products?.products?.Products?.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={products.products.totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default LandingPage;
