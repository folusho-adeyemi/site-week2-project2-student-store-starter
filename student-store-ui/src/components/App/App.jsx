import React, {useEffect, useState} from "react"
import { BrowserRouter } from 'react-router-dom'
import axios from "axios";
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import ProductDetail from "../ProductDetil/ProductDetail";
import "./App.css"


export default function App() {
  const [products, setProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [checkoutForm, setCheckOutForm] = useState({"name":"", "email":""})
  const URL = "https://codepath-store-api.herokuapp.com/store";

  useEffect(async() => {
    const fetchData = async () => {
      setIsFetching(true);
      try {
        const response = await axios.get(URL);
        const { data } = response;
        setProducts(data);
        setIsFetching(false);
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
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          <Sidebar />
          <Home />
        </main>
      </BrowserRouter>
    </div>
  )
}
