import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useGetSingleProductQuery } from '../redux/slices/products';
import Heart from '../assets/icons/Heart2.svg';
import Shop from '../assets/icons/shop1.svg';
import next_img from '../assets/icons/next_img.svg';
import previous from '../assets/icons/previous.svg';

import '../styles/SingleProductView.css';

const ProductDetail = () => {
  const { id } = useParams();
  const { isLoading, error, data } = useGetSingleProductQuery(id);

  const product = data.Products[0];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="product-detail">
      <div className="product-detail-container">
        <div className="product_image">
          <div className="image-container">
            <img
              src={previous}
              alt="previous"
              className="previous"
              onClick={previousImage}
            />
            <img
              src={product.images[currentImageIndex]}
              alt="product"
              className="product-detail-image"
            />
            <img
              src={next_img}
              alt="next_image"
              className="next_image"
              onClick={nextImage}
            />
          </div>
        </div>

        <div className="product-detail-desc">
          <h1>{product.productName}</h1>
          <p className="product_description">{product.description}</p>
          <div className="buttons">
            <p className="product_price">${product.price}</p>
            <div className="buttons-img">
              <img src={Heart} alt="Heart" className="Heart" />
              <img src={Shop} alt="Shop" className="Shop" />
            </div>
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
