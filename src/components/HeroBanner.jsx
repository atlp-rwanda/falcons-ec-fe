import React from 'react';
import furniture1 from '../assets/images/furniture1.png';
import furniture2 from '../assets/images/Rectangle1.jpg';
import furniture3 from '../assets/images/Rectangle.png';
import furniture4 from '../assets/images/Rectangle2.png';
import line from '../assets/icons/line.svg';
// import $120 from '../assets/icons/$120.svg';



const HeroBanner = () => {
  return (
    <div className="banner">
      <div className="banner_titles">
        <p className="title1">TOP COLLECTIONS 2023</p>
        <h1 className="title2">We Serve Your Dream Furniture</h1>
        <img src={line} alt="line" className="line" />
        <p className="title3">Get 50% off all products</p>
        <button className="shop_now" type="button">
          SHOP NOW
        </button>
      </div>
      <div className="banner_products">
        <div className="main_picture">
          <img src={furniture1} alt="Image1" className="picture1" />
          {/* <img src={$120} alt="$120" className="dollars" /> */}
        </div>
        <div className="small_image_container">
          <div className="small_image1">
            <img src={furniture2} alt="Image2" className="picture2" />
            <p className="product_desc">Office Desk Chair</p>
          </div>

          <div className="small_image2">
            <img src={furniture3} alt="Image2" className="picture3" />
            <p className="price">$180</p>
            <p className="product_desc">Office Desk Chair</p>
          </div>
          <div className="small-image3">
            <img src={furniture4} alt="Image1" className="picture4" />
            <p className="price">$250</p>

            <p className="product_desc">Office Desk Chair</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
