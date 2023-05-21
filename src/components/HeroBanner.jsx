import React from 'react';
import spinner from '../assets/icons/spinner.svg';

import line from '../assets/icons/line.svg';
import { useGetProductsQuery } from '../redux/slices/products';

const HeroBanner = () => {
  const { isLoading, error, data } = useGetProductsQuery({
    page: 1,
    limit: 1000,
  });
  if (isLoading || !data) {
   return <div className="banner" data-testid='banner'>
      <img src={spinner} className='banner-spinner' alt='loader' data-testid='loader'/>
    </div>
  }
  const product = data.Products[0];

  return (
    <div className="banner" data-testid="banner">
      <div className="banner_titles" data-testid="banner-titles">
        <p className="title1">TOP COLLECTIONS 2023</p>
        <h1 className="title2">We Serve Your Dream Furniture</h1>
        <img src={line} alt="line" className="line" />
        <p className="title3">Get 50% off all products</p>
        <button className="shop_now" type="button">
          SHOP NOW
        </button>
      </div>
      <div className="banner_products" data-testid="banner-products">
        <div className="main_picture">
          <img src={product.images[0]} alt="Image1" className="picture1" />
          {/* <img src={$120} alt="$120" className="dollars" /> */}
        </div>
        <div className="small_image_container">
          <div className="small_image1">
            <img src={product.images[1]} alt="Image2" className="picture2" />
            <p className="product_desc">Office Desk Chair</p>
          </div>

          <div className="small_image2">
            <img src={product.images[2]} alt="Image2" className="picture3" />
            <p className="price">${product.price}</p>
            <p className="product_desc">Office Desk Chair</p>
          </div>
          <div className="small-image3">
            <img src={product.images[3]} alt="Image1" className="picture4" />
            <p className="price">${product.price}</p>

            <p className="product_desc">Office Desk Chair</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
