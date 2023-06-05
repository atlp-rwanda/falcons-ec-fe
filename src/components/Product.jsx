/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/slices/cart/addCart';
import Heart from '../assets/Icons/Heart2.svg';
import Shop from '../assets/Icons/shop1.svg';

const Product = ({ product: { id, images, productName, price } }) => {
  const dispatch = useDispatch();
  const handleAddCart = (itemId) => {
    dispatch(addCart(itemId));
  };
  return (
    <div className="card-container-landing-page">
      <div className="product_image_icons">
        <img src={Heart} alt="Heart" className="Heart" />
        <img
          src={Shop}
          alt="Shop"
          className="Shop"
          onClick={() => handleAddCart(id)}
        />
      </div>
      <a className="product_link" href={`/products/${id}`}>
        <div className="product-card">
          <img
            src={images[0]}
            width={250}
            height={250}
            alt=""
            className="product-image"
          />

          <p className="product-name">{productName}</p>
          <p className="product-price">${price}</p>
        </div>
      </a>
    </div>
  );
};

export default Product;
