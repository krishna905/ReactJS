import React from 'react';
import { Link, Routes, Route } from 'react-router-dom'
// import About from './Components/3.About';

import FeaturedProducts from './Components/5.FeaturedProducts';
import Home from './Components/2.Home';
import Animals from './Components/6.Animals';
import Navbar from './Components/1.Navbar';
import NewProducts from './Components/5.NewProducts';
import NoMatch from './Components/7.NoMatch';
import OrderSummary from './Components/8.orderSummary';
import Products from './Components/4.Products';
import Users from './Components/9.Users';
import UserDetails from './Components/10.UserDetails';
import Admin from './Components/11.Admin';
import Profile from './Components/12.Profile';
import { AuthProvider } from './Components/13.Auth';
import Login from './Components/14.Login';
import RequireAuth from './Components/15.RequireAuth';
const LazyAbout = React.lazy(() => import('./Components/3.About'))

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path='' element={<Home />} />
        {/* <Route path='about' element={<About />} /> */}
        <Route
          path='about'
          element={
            <React.Suspense fallback='Loading...'>
              <LazyAbout />
            </React.Suspense>} />
        <Route path='/order-summary' element={<OrderSummary />} />
        <Route path='animals' element={<Animals />} />
        <Route path='products' element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path='featured' element={<FeaturedProducts />} />
          <Route path='new' element={<NewProducts />} />
        </Route>
        <Route path='users' element={<Users />}>
          <Route path=':userId' element={<UserDetails />} />
          <Route path='admin' element={<Admin />} />
        </Route>
        <Route
          path='profile'
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>} />
        <Route path='login' element={<Login />} />


        <Route path="*" element={<NoMatch />} />

      </Routes >
    </AuthProvider>
  )
}

export default App;

//Index route is used when u have nestd routes and u wanyt to diaply in the parent componnet 
//index route wil have index prop..ionstead of path prop
