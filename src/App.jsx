/* eslint-disable import/no-unresolved */
import React from 'react';
import { Route, RouterProvider, createRoutesFromElements } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import './sass/App.scss';
import { Home, Signup } from './views';
import { Layout } from './components';

const mainRoutes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route path="/" element={<Home />} />
    <Route path="/signup" element={<Signup />} />
  </Route>
);

const mainRouter = createBrowserRouter(mainRoutes);

function App() {
  return <RouterProvider router={mainRouter} />;
}

export default App;
