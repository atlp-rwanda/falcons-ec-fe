import React from 'react';
import deleteProduct from '../assets/icons/delete.svg';
import edit from '../assets/icons/edit.svg';

const SellerProduct = ({ product: { id, images, productName, price } }) => {
  return (
    
    <div>
  
      <a className="product_link" href={`sellerDashboard/products/${id}`}>
        <div className="product-card">
          <div className="seller_product_image_icons">   
            <img src={edit} alt="edit" className="edit" />
            <img src={deleteProduct} alt="delete" className="delete" />
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

export default SellerProduct;
