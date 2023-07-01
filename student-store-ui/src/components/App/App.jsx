import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import ProductDetail from "../ProductDetail/ProductDetail";
import "./App.css";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { toast, ToastContainer } from "react-toastify";

export default function App() {
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState([]);
  const [showReceipt, setShowReceipt] = useState(false)
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [shoppingCart, setShoppingCart] = useState({});
  const [checkoutForm, setCheckoutForm] = useState({ name: "", email: "", error: "" });
  const API_URL = "https://codepath-store-api.herokuapp.com/store";
  
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
  // console.log("Toggle button clicked");
  setIsOpen(!isOpen);
  }

  function handleAddItemsToCart(productId, price, name) {
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
        name: name,
      };
    }
  
    setShoppingCart(temp);
    console.log(shoppingCart)
  }

  function handleRemoveItemFromCart(productId, price, name) {
    let temp = { ...shoppingCart };
    let inCart = false;
    console.log(temp)
    if (temp[productId] && temp[productId].quantity == 1){
      delete temp[productId]
    }
    if (temp[productId] && temp[productId].quantity > 0) {
      temp[productId] = {
        ...temp[productId],
        name: name,
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
  
  function handleOnSubmitCheckoutForm(shoppingCart) {  
    console.log("Toggle button clicked");
    const {name, email, error} = checkoutForm
    if (Object.keys(shoppingCart).length === 0){
      console.log("HERE",shoppingCart)
      handleOnCheckoutFormChange({
        
        ...checkoutForm,
        error: "Please provide both name and email",
      });
      return;
    } 
    // if (!name || !email){
    //   console.log("BOY", name, email)
    //   handleOnCheckoutFormChange({
    //     ...checkoutForm,
    //     error: "Please provide both name and email",
    //   });
    //   return;
    // }
    setShoppingCart({})
    setShowReceipt(true)

   
    }
  
  function handleShopClick(){
    toast.info(
      "A confirmation email will be sent to you so that you can confirm this order. Once you have confirmed the order, it will be delivered to your dorm room."
    );
    setShowReceipt(false);
    setShoppingCart({});
    
    
    }

  function handleExitClick(){
    return
  }

  console.log(checkoutForm)

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
            showReceipt ={showReceipt}
            subtotal={subtotal}
            setSubtotal = {setSubtotal}
            setTax ={setTax}
            tax={tax}
            setTotal = {setTotal}
            total={total}
            handleShopClick ={handleShopClick}
            handleExitClick={handleExitClick}
            setShowReceipt={setShowReceipt}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  products={products}
                  handleAddItemsToCart={handleAddItemsToCart}
                  handleRemoveItemFromCart={handleRemoveItemFromCart}
                />
              }
            />
            <Route
              path="/products/:productId"
              element={
                <ProductDetail
                  products={products}
                  handleAddItemsToCart={handleAddItemsToCart}
                  handleRemoveItemFromCart={handleRemoveItemFromCart}
                />
              }
            />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
            }
