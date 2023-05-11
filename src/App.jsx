/* eslint-disable import/no-unresolved */
import React from 'react';
import { Route, RouterProvider, createRoutesFromElements } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import './sass/App.scss';
import './sass/LandingPage.scss';

import { LandingPage, Login } from './views';
import { Layout } from './components';

const mainRoutes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route path="/" element={<LandingPage />} />
    <Route path="login" element={<Login />} />
  </Route>
);

const mainRouter = createBrowserRouter(mainRoutes);

function App() {
  return (
    <>
      {/* <main><Counter /></main> */}
      <RouterProvider router={mainRouter} />
    </>
  );
}

export default App;
