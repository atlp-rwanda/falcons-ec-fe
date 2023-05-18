import React from 'react';
import { useParams } from 'react-router';
import { useGetSingleProductQuery } from '../redux/slices/products';
import Heart from '../assets/icons/Heart.svg';
import Shop from '../assets/icons/Shop.svg';
import next_img from '../assets/icons/next_img.svg';
import previous from '../assets/icons/previous.svg';

import '../sass/SingleProductView.scss';
// import { useGetReviewsQuery } from '../redux/slices/review';

const ProductDetail = () => {
  const { id } = useParams();

  const { isLoading, error, data } = useGetSingleProductQuery(id);
  useGetSingleProductQuery(id);

  const product = data.Products[0];
  return (
    <div>
      <div className="product-detail-container ">
        <div className="product_image">
          <div className="image-container">
            <div className="image_controls">
              <img src={previous} alt="previous" className="previous" />
              <img src={next_img} alt="next_image" className="next_image" />
            </div>
            <img
              src={product.images[0]}
              alt="product"
              className="product-detail-image"
            />
          </div>
        </div>

        <div className="product-detail-desc">
          <h1>{product.productName}</h1>
          <p className="product_price">${product.price}</p>
          <p className="product_description">{product.description}</p>
          <div className="buttons">
            <img src={Heart} alt="Heart" className="Heart" />
            <img src={Shop} alt="Shop" className="Shop" />
          </div>
          <div className="small-images-container">
            <img
              src={product.images[1]}
              className="small-image selected-image"
            />
            <img
              src={product.images[2]}
              className="small-image selected-image"
            />
            <img
              src={product.images[3]}
              className="small-image selected-image"
            />
          </div>
        </div>
      </div>
      <div className="reviews">
        <div className="review_title">Reviews</div>
      </div>
    </div>
  );
};

export default ProductDetail;
