import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { useGetSingleProductQuery } from '../redux/slices/products';
import ProductDetail from '../components/ProductDetail';
import '../styles/SingleProductView.css';
import spinner from '../assets/Icons/spinner.svg';

const SingleProductView = () => {
  const { id } = useParams();
  const { isLoading, error, data } = useGetSingleProductQuery(id);

  if (isLoading || !data) {
    return (
      <div>
        <div className="go_back">
          <Link to="/" className="go_back_link">
            Go Back
          </Link>
        </div>
        <div className="single-products-container">
          <img
            className="single-spinner"
            src={spinner}
            style={{ height: '55px' }}
            alt="loader"
          />
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
    <div>
      <div className="go_back">
        <Link to="/" className="go_back_link">
          Go Back
        </Link>
      </div>
      <div>
        <ProductDetail />
      </div>
    </div>
  );
};
export default SingleProductView;
