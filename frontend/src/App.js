import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route ,Redirect} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './component/Login';
import Register from './component/Register';
import Home from './component/Home';
import Profile from './component/Profile';
import ProductList from './component/ProductList'; 
import ProductAdd from './component/ProductAdd';
import NavBar from './component/NavBar';
import Cart from './component/Cart'
import HomePraveen from './component/HomeP';
import NotFound from './component/NotFound';
import Admin from './component/admin';
 

function App() {
 
 return (
    <div className="App">
      <Router>
        <ToastContainer />
        <NavBar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} /> 
          <Route path="/profile" element={<Profile />} />
          <Route path="/product"  element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<HomePraveen />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/product/list" element={<ProductList />} />
          <Route path="/product/add" element={<ProductAdd />} />
          <Route path="*" element={<NotFound />} />
        
        </Routes>
        <ToastContainer />
      </Router>
    </div>
 );
}

export default App;
