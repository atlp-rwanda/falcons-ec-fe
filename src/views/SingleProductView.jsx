import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

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
          <a href="/" className="go_back_link">
            {/* <img src={Up} alt="arrow" className="arrow" /> */}
            Go Back
          </a>
        </div>
        <div className="single-products-container">
          <img src={spinner} style={{ height: '55px' }} alt="loader" />
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
        <a href="/" className="go_back_link">
          {/* <img src={Up} alt="arrow" className="arrow" />  */}
          Go Back
        </a>
      </div>
      <div>
        <ProductDetail />
      </div>
    </div>
  );
};
export default SingleProductView;
