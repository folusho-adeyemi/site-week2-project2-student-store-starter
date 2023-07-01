import React from "react";
import "./Sidebar.css";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import Receipt from "../Receipt/Receipt";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

export default function Sidebar({ showReceipt, setShowReceipt, isOpen, shoppingCart, products, checkoutForm, handleShopClick, handleExitClick, handleCheckoutForm, handleSubmitCheckoutForm, handleOnToggle, subtotal, total, tax, setSubtotal, setTotal, setTax }) {
  const [checkoutUserDetails, setCheckoutUserDetails] = useState({
    name: "",
    email: ""
  });

  function updateUserDetails(formData) {
    setCheckoutUserDetails({
      name: formData.name,
      email: formData.email
    })
    setShowReceipt(true);
  }

  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="cart-icons">
        {isOpen ? (
          <div className="shoppping-cart">
            <button className="toggle-button button open" onClick={handleOnToggle}>
              <i className="material-icons md-48">arrow_backward</i>
            </button>
            <span className="cart-icons icon button">
              <i className="material-icons md-48">add_shopping_cart</i>
            </span>
            <ShoppingCart isOpen={isOpen} shoppingCart={shoppingCart} products={products} subtotal={subtotal} total={total} tax={tax} setSubtotal={setSubtotal} setTax={setTax} setTotal={setTotal} />
            <span className="cart-icons icon button">
              <i className="material-icons md-48">monetization_on</i>
            </span>
            <CheckoutForm updateUserDetails={updateUserDetails} isOpen={isOpen} setShowReceipt={setShowReceipt} showReceipt={showReceipt} shoppingCart={shoppingCart} products={products} checkoutForm={checkoutForm} handleOnCheckoutFormChange={handleCheckoutForm} handleOnSubmitCheckoutForm={handleSubmitCheckoutForm} />
            <span className="cart-icons icon button">
              <i className="material-icons md-48">fact_check</i>
            </span>
            {showReceipt && Object.keys(shoppingCart).length > 0 && <Receipt name={checkoutUserDetails.name} email={checkoutUserDetails.email} showReceipt={showReceipt} items={shoppingCart} handleShopClick={handleShopClick} handleExitClick={handleExitClick} subtotal={subtotal} total={total} />}
          </div>
        ) : (
          <div>
            <button className="toggle-button button closed" onClick={handleOnToggle}>
              <i className="material-icons md-48">arrow_forward</i>
            </button>
          </div>
        )}
      </div>
      <ToastContainer autoClose={3000}/>

    </aside>
    
  );
}
