import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import ProductDetail from "../ProductDetail/ProductDetail";
import NotFound from "../NotFound/NotFound";
import About from "../About/About";
import Footer from "../Footer/Footer";

import "./App.css";

export default function App() {
  const [products, setProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [shoppingCart, setShoppingCart] = useState({});
  const [checkoutForm, setCheckoutForm] = useState({ name: "", email: "" });
  const API_URL = "https://codepath-store-api.herokuapp.com/store";

  useEffect(() => {
  })
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios(API_URL);
        setProducts(response.data.products);
      } catch (error) {
        console.log(error);
        setIsFetching(true);
      }
    }
    // console.log(products);
    fetchData();
  }, []);

  function handleOnToggle() {
  console.log("Toggle button clicked");
  setIsOpen(!isOpen);
  }

  function handleAddItemsToCart(productId, price) {
    let temp = { ...shoppingCart };
    let inCart = false;
  
    if (temp[productId]) {
      temp[productId] = {
        ...temp[productId],
        quantity: temp[productId].quantity + 1,
        price: price,
      };
      inCart = true;
    } else {
      temp[productId] = {
        itemId: productId,
        quantity: 1,
        price: price,
      };
    }
  
    setShoppingCart(temp);
  }

  function handleRemoveItemToCart(productId, price) {
    let temp = { ...shoppingCart };
    let inCart = false;
    console.log(temp)
    if (temp[productId] && temp[productId].quantity == 1){
      delete temp[productId]
    }
  
    if (temp[productId] && temp[productId].quantity > 0) {
      temp[productId] = {
        ...temp[productId],
        quantity: temp[productId].quantity - 1,
        price: price,
      };
      inCart = true;
    }
    
  
    setShoppingCart(temp);
  }
  


  function handleOnCheckoutFormChange(name, value) {
    setCheckoutForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }

  function handleOnSubmitCheckoutForm(name, value) {
    // Handle the submission of the checkout form
  }

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          <Sidebar
            isOpen={isOpen}
            shoppingCart={shoppingCart}
            products={products}
            checkoutForm={checkoutForm}
            handleCheckoutForm={handleOnCheckoutFormChange}
            handleSubmitCheckoutForm={handleOnSubmitCheckoutForm}
            handleOnToggle={handleOnToggle}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  products={products}
                  handleAddItemsToCart={handleAddItemsToCart}
                  handleRemoveItemToCart={handleRemoveItemToCart}
                />
              }
            />
            <Route
              path="/products/:productId"
              element={
                <ProductDetail
                  products={products}
                  handleAddItemsToCart={handleAddItemsToCart}
                  handleRemoveItemToCart={handleRemoveItemToCart}
                />
              }
            />
          </Routes>
          {/* <Menu /> */}
        </main>
      </BrowserRouter>
    </div>
  );
            }
