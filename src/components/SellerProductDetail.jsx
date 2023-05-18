import React from 'react';
import { useParams } from 'react-router';
import { useGetSingleProductQuery } from '../redux/slices/products';
import deleteProduct from '../assets/icons/delete.svg';
import edit from '../assets/icons/edit.svg';
import spinner from '../assets/icons/spinner.svg';
import next_img from '../assets/icons/next_img.svg';
import previous from '../assets/icons/previous.svg';

import '../sass/SingleProductView.scss';
// import { useGetReviewsQuery } from '../redux/slices/review';

const SellerProductDetail = () => {
  const { id } = useParams();

  const { isLoading, error, data } = useGetSingleProductQuery(id);
  useGetSingleProductQuery(id);
  if (isLoading || !data) {
    return (
      <div className="product_image">
        <img
          src={spinner}
          style={{ height: '55px', marginLeft: '650px' }}
          alt="loader"
        />
      </div>
    );
  }

  const product = data.Products[0];
  return (
    <div>
      <div className="seller-product-detail-container ">
        <div className="product_image">
          <div className="image-container">
            <div className="seller_ image_controls">
              <img src={previous} alt="previous" className="previous" />
              <img src={next_img} alt="next_image" className="next_image" />
            </div>
            <img
              src={product.images[0]}
              alt="product"
              className="product-detail-image"
            />
          </div>

          <div className="seller_buttons">
            <img src={edit} alt="Heart" className="Heart" />
            <img src={deleteProduct} alt="Shop" className="Shop" />
          </div>
        </div>
        <div className="seller_product-detail-desc">
          <h2 className="seller_product_name">Name</h2>
          <p> {product.productName}</p>
          <h2 className="seller_product_price">Price</h2>
          <p>${product.price}</p>
          <h2 className="seller_product_description_title">Description</h2>

          <p className="seller_product_description">{product.description}</p>
          <h2 className="seller_product_quantity">Left in Stock</h2>
          <p className="product_quantity">{product.quantity}</p>
        </div>
      </div>
    </div>
  );
};

export default SellerProductDetail;
