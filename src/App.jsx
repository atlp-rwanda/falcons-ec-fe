/* eslint-disable import/no-unresolved */
import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './styles/App.css';
import { Home, Login } from './views';
import { Layout } from './components';
import { ProductLayout } from './components/layouts/ProductLayout';
import ProductForm from './components/ProductForm';
import AuthLayout from './components/layouts/AuthLayout';
import Signup from './views/Signup';

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'login', element: <Login /> },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [{ path: '/signup', element: <Signup /> }],
  },

  {
    path: '/product/',
    element: <ProductLayout />,
    children: [{ path: 'add', element: <ProductForm /> }],
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
