import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './sass/App.scss';
import './sass/LandingPage.scss';

import { LandingPage, Login } from './views';
import { Layout, SellerLayout } from './components';
import SellerDashboard from './views/SellerDashboard';
import SingleProductView from './views/SingleProductView';
import SellerSingleProductView from './views/SellerSingleProductView';

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <LandingPage /> },
      { path: 'products/:id', element: <SingleProductView /> },
      { path: 'login', element: <Login /> },
    ],
  },
  {
    path: '/sellerDashboard',
    element: <SellerLayout />,
    children: [
      { path: '', element: <SellerDashboard /> },
      { path: 'products/:id', element: <SellerSingleProductView /> },
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
