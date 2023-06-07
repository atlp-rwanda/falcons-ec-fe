/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import Heart from '../assets/Icons/Heart2.svg';
import Shop from '../assets/Icons/shop1.svg';
import { addProductToWishlist } from '../redux/slices/productWishlist/AddProductToWishlist';

const Product = ({ product: { id, images, productName, price } }) => {

  const dispatch = useDispatch();

  const handleAddProductToWishlist = (itemId) => {
    dispatch(addProductToWishlist(itemId));
  };
  return (
    <div>
      <a className="product_link" href={`/products/${id}`}>
        <div className="product-card">
          <div className="product_image_icons">
            <img 
            src={Heart} 
            alt="Heart" 
            className="Heart" 
            onClick={() => handleAddProductToWishlist(id)}
            />
            <img src={Shop} alt="Shop" className="Shop" />
          </div>

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
