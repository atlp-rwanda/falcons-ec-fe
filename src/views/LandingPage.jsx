import React from 'react';
import { HeroBanner, HomeNavBar, Product, SearchBar } from '../components';
import { useGetProductsQuery } from '../redux/slices/products';

const LandingPage = () => {
  // const { isLoading, error, data } = useGetProductsQuery();
    // if (isLoading || !data) {
    //   return (
        
    //     <div className="products-container">
    //     Loading....
          
    //     </div>
    //   );
    // }

    // if (error) {
    //   return (
    //     <div className="products-container">
    //       Oops!🙊🙊Something went wrong....
    //       <p>{error.message}</p>
    //     </div>
    //   );
    // }
  return (
    <div>
      <SearchBar />
      <HomeNavBar />
      <HeroBanner />

      <div className="products_list">
        <h1 className="products_heading">OUR PRODUCTS</h1>
        {/* <div className="products-container">
        {data.Products.map((product)=>(
          <Product key={product.id} product={product} />
        ))

        }
        </div> */}
      </div>
    </div>
  );
};

export default LandingPage;
