import React from 'react';
import Heart from '../assets/Icons/Heart2.svg';
import Shop from '../assets/Icons/shop1.svg';

const Product = ({ product: { id, images, productName, price } }) => {
  return (
    <div>
      <a className="product_link" href={`/products/${id}`}>
        <div className="product-card">
          <div className="product_image_icons">
            <img src={Heart} alt="Heart" className="Heart" />
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
