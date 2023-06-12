import React, { useEffect, useState } from 'react';
import DashboardHeader from '../../components/DashboardHeader';
import truck from '../../assets/Icons/truck.svg';
import wish from '../../assets/Icons/wish.svg';
import expired from '../../assets/Icons/expired.svg';
import deleteProduct from '../../assets/delete.png';
import edit from '../../assets/edit.png';
import spinner_SVG from '../../assets/spinner.svg';
import spinner from '../../assets/Icons/spinner.svg';

import { Link } from 'react-router-dom';
import '../../styles/dashboard.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSellerProducts } from '../../redux/slices/sellerProducts';
import Swal from 'sweetalert2';
import { deleteSingleProduct } from '../../redux/slices/product/productDelete';
import { updateAvailability } from '../../redux/slices/product/productAvailability';
import { Pagination } from '../../components';

const Dashboard = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  const deleteStatus = useSelector((state) => state.productDelete);
  const availabilityStatus = useSelector((state) => state.productAvailability);
  const [currentPage, setCurrentPage] = useState(1);

  const handleDeleteProduct = (id) => {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: "You're about to delete this product, this action is irreversible!",
      confirmButtonColor: '#64B937',
    }).then(() => {
      dispatch(deleteSingleProduct(id));
    });
  };
  const handleAvailability = (id) => {
    dispatch(updateAvailability(id));
  };

  const formatDate = (dateString) => {
    if (!dateString) {
      return '';
    }
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, '0');
    const day = `${date.getDate()}`.padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(fetchSellerProducts({ page: currentPage, limit: 10 }));
  }, [
    deleteStatus.serverResponded,
    availabilityStatus.serverResponded,
    currentPage,
  ]);
  return (
    <div className="seller-main-dashboard">
      <DashboardHeader text="dashboard" className="dash-text" />
      <div className="cards">
        <div className="available">
          <img src={truck} alt="truck" />
          <p className="card_title">Available</p>
          <p className="card_number">67</p>
        </div>
        <div className="wished">
          <img src={wish} alt="wish" />
          <p className="card_title">Wished</p>
          <p className="card_number">09</p>
        </div>
        <div className="expired">
          <img src={expired} alt="expired" />
          <p className="card_title">Expired</p>
          <p className="card_number">35</p>
        </div>
      </div>
      {products?.loading ? (
        <div className="products-container" data-testid="products-container">
          <img src={spinner} alt="loader" className="products-table-loader" />
        </div>
      ) : (
        <div className="products-table-container">
          <label className="products-table-title">Products</label>
          <table className="products-table">
            <thead>
              <tr>
                <th> </th>
                <th>Name</th>
                <th>Unit Price</th>
                <th>Quantity</th>
                <th>Availability</th>
                <th>Date created</th>
                <th>Expiry date</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {products?.products?.Products?.map((product) => (
                <tr key={product.id}>
                  <td>
                    <img src={product.images[0]} alt="image" />
                  </td>
                  <td>{product.productName}</td>
                  <td>${product.price}</td>
                  <td>{product.quantity}</td>
                  <td>
                    {product.availability ? (
                      <Link
                        to={'#'}
                        className="products-table-availability green"
                        onClick={() => handleAvailability(product.id)}
                      >
                        True
                      </Link>
                    ) : (
                      <Link
                        to={'#'}
                        className="products-table-availability red"
                        onClick={() => handleAvailability(product.id)}
                      >
                        False
                      </Link>
                    )}
                  </td>
                  <td>{formatDate(product.createdAt)}</td>
                  <td>{formatDate(product.expiryDate)}</td>
                  <td>
                    <div className="products-table-actions">
                      <Link
                        to={`/dashboard/products/${product.id}/update`}
                        className="products-table-action blue"
                      >
                        Edit
                      </Link>
                      <Link
                        to={`#`}
                        className="products-table-action red"
                        onClick={() => handleDeleteProduct(product.id)}
                      >
                        Delete
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="products-table-small">
            {products?.products?.Products?.map((product) => (
              <div
                className="products-table-single-product-row"
                key={product.id}
              >
                {/* <img src={product.images[0]} /> */}
                <div className="products-table-single-product-details">
                  <label className="products-table-details name">
                    {product.productName}
                  </label>
                  <label className="products-table-details">
                    ${product.price}
                  </label>
                  <label className="products-table-details date">
                    {formatDate(product.expiryDate)}(EXP)
                  </label>
                  <label className="products-table-details date">
                    {formatDate(product.createdAt)}(MFG)
                  </label>
                  <Link
                    onClick={() => handleAvailability(product.id)}
                    className={`products-table-details ${
                      product.availability ? 'available' : 'not-available'
                    }`}
                  >
                    {product.availability ? 'Available' : 'not available'}
                  </Link>
                </div>
                <div className="products-table-image-icons">
                  <Link to={`/dashboard/products/${product.id}/update`}>
                    <img src={edit} alt="edit" className="edit" />
                  </Link>
                  <Link
                    to={`#`}
                    onClick={() => handleDeleteProduct(product.id)}
                  >
                    <img src={deleteProduct} alt="delete" className="delete" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={products.products.totalPages}
            onPageChange={onPageChange}
          />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
