/* eslint-disable import/no-unresolved */
import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './styles/App.css';
import { Layout } from './components';
import './styles/LandingPage.css';
import { LandingPage } from './views';
import { ProductLayout } from './components/layouts/ProductLayout';
import ProductForm from './components/ProductForm';
import { GetProfile, EditProfile} from './views';
import AuthLayout from './components/layouts/AuthLayout';
import Signup from './views/Signup';
import SingleProductView from './views/SingleProductView';
import SellerDashboard from './views/SellerDashboard';
import SellerSingleProductView from './views/SellerSingleProductView';
import UpdatePassword from './views/updatePswd';

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
    { path: '/profile', element: <GetProfile />},
    { path: '/profile/edit', element: <EditProfile />},
      { path: '/', element: <LandingPage /> },
      { path: 'products/:id', element: <SingleProductView /> },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [{ path: '/register', element: <Signup /> }],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [{ path: '/update-password', element: <UpdatePassword/>}]
  },

  {
    path: '/product/',
    element: <ProductLayout />,
    children: [{ path: 'add', element: <ProductForm /> },]
  },
  {
    path: '/sellerDashboard/',
    element: <ProductLayout />,
    children: [
      { path: '', element: <SellerDashboard /> },
      {
        path: 'products/:id',
        element: <SellerSingleProductView />,
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
