/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import '../styles/productWishlist.css';
import spinner from '../assets/icons/spinner.svg';
import { addProductToWishlist } from '../redux/slices/productWishlist/AddProductToWishlist';
import { Footer } from '../components';

const Wishlist = () => {
    // const wishlist = useSelector((state) => state.addProductToWishlist); // Get the wishlist state from the Redux store
    return (
        <div className="wishlist-container">
            <p>You WishList is Empty! </p>
            {/* <div className="wishlist-header">
                <div className="wishlist-title">
                    <p className="wishlist-name">Wishlist</p>
                </div>
            </div> */}
            {/* <div className="wishlist-products-container">
                
            </div> */}
        <footer>
            <Footer />
        </footer>
        </div>
    )
}

export default Wishlist;