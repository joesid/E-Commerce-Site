import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar.js';
import ProductList from './components/ProductList.js';
import Details from './components/Details.js'
import Cart from './components/Cart.js';
import Default from './components/Default.js';
// import Product from './components/Product.js';



function App() {
  return (
    <>
    <Navbar />
    <ProductList />
    <Details />
    <Cart />
    <Default />
     
    </>
  );
}

export default App;
