import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
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
  const [products, setProducts] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [checkoutForm, setCheckoutForm] = useState({ name: "", email: "" });
  const API_URL = "https://codepath-store-api.herokuapp.com/store";

  useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true);
      try {
        const response = await axios.get(`${API_URL}`);
        const { data } = response;
        setProducts(data);
        setIsFetching(true);
        console.log("Fetched products:", products);
      } catch (error) {
        setError("Error fetching products.");
        setIsFetching(false);
      }
    };

    fetchData();
  }, []);

  function handleOnToggle() {
    setIsOpen(!isOpen);
  }

  function handleAddItemsToCart(productId) {
    let temp = [...shoppingCart];
    let inCart = false;

    temp = temp.map((item) => {
      if (item.itemId === productId) {
        inCart = true;
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });

    if (!inCart) {
      temp = [...temp, { itemId: productId, quantity: 1 }];
    }

    setShoppingCart(temp);
  }

  function handleRemoveItemToCart(productId) {
    let temp = [...shoppingCart];
    let inCart = false;

    temp = temp.map((item) => {
      if (item.itemId === productId) {
        inCart = true;
        return { ...item, quantity: item.quantity - 1 };
      } else {
        return item;
      }
    });

    if (!inCart) {
      temp = [...temp, { itemId: productId, quantity: 0 }];
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
        <Sidebar isOpen={isOpen} />
        <Navbar />
        <Routes>
          <Route exact path="/" element={() => <Home products={products} />} />
          <Route path="/products/:productId" element={ProductDetail} />
          <Route component={NotFound} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
