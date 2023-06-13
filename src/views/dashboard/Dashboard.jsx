import React from 'react';
import DashboardHeader from '../../components/DashboardHeader';
import truck from '../../assets/Icons/truck.svg';
import wish from '../../assets/Icons/wish.svg';
import expired from '../../assets/Icons/expired.svg';

import '../../styles/dashboard.css';
import ProductsTable from '../ProductsTable';
import { useSelector } from 'react-redux';

const Dashboard = () => {
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
      <ProductsTable />
    </div>
  );
};

export default Dashboard;
