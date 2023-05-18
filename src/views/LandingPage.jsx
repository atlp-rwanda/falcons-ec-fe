import React, { useState } from 'react';
import { HeroBanner, HomeNavBar, Product, SearchBar } from '../components';
import spinner from '../assets/icons/spinner.svg';
import next from '../assets/icons/next.svg';
import arrow from '../assets/icons/arrow.svg';
import left_arrow from '../assets/icons/left-arrow.svg';
import right_arrow from '../assets/icons/right-arrow.svg';

import { useGetProductsQuery } from '../redux/slices/products';

const LandingPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { isLoading, error, data } = useGetProductsQuery({ page: currentPage });
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
      <div>
        <SearchBar />
        <HomeNavBar />
        <HeroBanner />

        <div className="products_list">
          <h1 className="products_heading">OUR PRODUCTS</h1>
          <div className="products-container">
            <img src={spinner} style={{ height: '55px' }} alt="loader" />
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="products-list">
        Oops!🙊🙊Something went wrong....
        <p>{error.message}</p>
      </div>
    );
  }
  return (
    <div data-testid="landing-page">
      <SearchBar />
      <HomeNavBar />
      <HeroBanner />

      <div className="products_list">
        <h1 className="products_heading">OUR PRODUCTS</h1>
        <div className="products-container">
          {data.Products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
        {/* <div className="products-container">
          {product1 && <Product key={product1.id} product={product1} />}
        </div> */}
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
  );
};

export default LandingPage;
