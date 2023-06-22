/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import spinner from '../assets/spinner.svg';
import { getAllProductWishes } from '../redux/slices/productWishlist/getProductFromWishlist';
import Heart from '../assets/Icons/Heart2.svg';
import Shop from '../assets/Icons/shop1.svg';
import wishlistImage from '../assets/wishlistImage.svg';
import '../styles/productWishlist.css';
import { addProductToWishlist } from '../redux/slices/productWishlist/AddProductToWishlist';
import { addCart } from '../redux/slices/cart/addCart';

const Wishlist = () => {
  const dispatch = useDispatch();
  const { wishlist, loading } = useSelector(
    (state) => state.getAllProductWishes
  );
  const [currentWishlist, setCurrentWishlist] = useState(wishlist.product);

  useEffect(() => {
    dispatch(getAllProductWishes());
  }, []);

  const handleAddCart = (itemId) => {
    dispatch(addCart(itemId));
  };
  const handleRemoveFromWishlist = (itemId) => {
    const wishlistItem = currentWishlist.filter((id) => id.id !== itemId);
    setCurrentWishlist(wishlistItem);
    dispatch(addProductToWishlist({ product_id: itemId }));
  };

  let items = [];
  if (currentWishlist !== undefined) {
    items = currentWishlist;
  }
  return (
    <div className="wishlist-container" data-testid="wishlist-container">
      <div className="wishlist-title">
        <p className="wishlist-name">My Wishlist</p>
      </div>
      <div className="wishlist-products-container">
        {loading ? (
          <img
            className="wishlist-loader"
            src={spinner}
            style={{ height: '55px' }}
            alt="loader"
          />
        ) : items.length === 0 ? (
          <div className="empty-wishlist-container">
            <div className="wishlist-image">
              <img
                src={wishlistImage}
                alt="wishlist"
                className="wishlist-icon-cart"
              />
            </div>
            <div className="wishlist-message-container">
              <p className="wishlist-message">Your Wishlist is Empty</p>
            </div>
          </div>
        ) : (
          <div>
            <div className="wishlist-map">
              {items.map((product) => (
                <div className="wishlist-card" key={product.id}>
                  <div className="productWish_image_icons">
                    <img
                      src={Heart}
                      alt="Heart"
                      className="HeartWish"
                      onClick={() => handleRemoveFromWishlist(product.id)}
                    />

                    <img
                      src={Shop}
                      alt="Shop"
                      className="Shop"
                      onClick={() => handleAddCart(product.id)}
                    />
                  </div>
                  <div className="product-card">
                    <img
                      src={product.images[0]}
                      width={250}
                      height={250}
                      alt=""
                      className="product-image"
                    />

                    <p className="product-name">{product.productName}</p>
                    <p className="product-price">${product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
