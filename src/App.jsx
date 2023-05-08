/* eslint-disable import/no-unresolved */
import React from 'react';
import { Route, RouterProvider, createRoutesFromElements } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import './styles/App.css'
import { Home, Login } from './views';
import { Counter, Layout } from './components';

const mainRoutes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route path="/" element={<Home />} />
    <Route path="login" element={<Login />} />
  </Route>
);

const mainRouter = createBrowserRouter(mainRoutes);

function App() {
  return (
  <>
  <main><Counter /></main>
  <RouterProvider router={mainRouter} />
  
  </>)
}

export default App;
