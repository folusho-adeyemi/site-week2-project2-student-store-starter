import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import ProductDetail from "../ProductDetail/ProductDetail";
import NotFound from "../NotFound/NotFound";
import "./App.css";

export default function App() {
  const [products, setProducts] = useState([]);
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

  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route exact path="/" element={() => <Home products={products} />} />
          <Route path="/products/:productId" component={ProductDetail} />
          <Route component={NotFound} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
