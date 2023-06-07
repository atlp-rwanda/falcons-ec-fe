/* eslint-disable react/jsx-pascal-case */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './styles/App.css';
import { Layout } from './components';
import './styles/LandingPage.css';
import { LandingPage } from './views';
import DashboardLayout  from './components/layouts/DashboardLayout';
import ProductForm from './components/ProductForm';
import { GetProfile, EditProfile  } from './views';
import AuthLayout from './components/layouts/AuthLayout';
import Signup from './views/Signup';
import SingleProductView from './views/SingleProductView';
import SellerDashboard from './views/SellerDashboard';
import SellerSingleProductView from './views/SellerSingleProductView';
import Signin from './views/Login';
import Two_FactorAuth from './views/twoFactorAuth';
import Forgot_Password from './views/ForgotPassword';
import Reset_Password from './views/ResetPassword';
import Dashboard from './views/dashboard/Dashboard';
import ProfileLayout from './components/layouts/ProfileLayout';
import Orders from './views/dashboard/Orders';
import { EmailVerification } from './views/EmailVerification';
import UserAuth from './utils/UserAuth';
import Wishlist from './views/productWishlist';

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <LandingPage /> },
      { path: 'products/:id', element: <SingleProductView /> },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      
      { path: '/register', element: <Signup /> },
      { path: '/signin', element: <Signin /> },
      { path: '/wishlist', element: <Wishlist/> },
      { path: '/users/verify', element: <Two_FactorAuth /> }
    ,
      { path: '/forgot-password', element: <Forgot_Password /> },
      { path: '/password/:token/reset', element: <Reset_Password /> },
      { path: '/verification/:status', element: <EmailVerification /> },
    ],
  },
  {
    path: '/',
    element: <UserAuth><ProfileLayout /></UserAuth>,
    children: [{ path: '/profile', element: <GetProfile />},
    { path: '/profile/edit', element: <EditProfile />},]
  },
  {
    path: '/dashboard/',
    element: <UserAuth><DashboardLayout /></UserAuth>,
    children: [
      {path:'', element: <Dashboard />},
      { path: 'products', element: <SellerDashboard /> },
      { path: 'orders', element: <Orders /> },
      { path: 'products/add', element: <ProductForm />},
      { path: 'products/:id', element: <SellerSingleProductView />,
      },
    ],
  },
];

const router = (
  <BrowserRouter>
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element}>
          {route.children.map((child) => (
            <Route key={child.path} path={child.path} element={child.element} />
          ))}
        </Route>
      ))}
    </Routes>
  </BrowserRouter>
);

function App() {
  return router;
}

export default App;
