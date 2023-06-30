import React from "react";
import "./Sidebar.css";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

export default function Sidebar({isOpen,shoppingCart,products,checkoutForm,handleCheckoutForm,handleSubmitCheckoutForm,handleOnToggle,handleAddItemsToCart, handleRemoveItemToCart}) {
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
          <ShoppingCart isOpen={isOpen} shoppingCart={shoppingCart} products={products} handleAddItemsToCart ={handleAddItemsToCart} handleRemoveItemToCart ={handleRemoveItemToCart} />
          <span className="cart-icons icon button">
            <i className="material-icons md-48">monetization_on</i>
          </span>
          <span className="cart-icons icon button">
            <i className="material-icons md-48">fact_check</i>
          </span>
        </div>
       ): (
        <div>
          <button className="toggle-button button closed" onClick={handleOnToggle}>
            <i className="material-icons md-48">arrow_forward</i>
          </button>
          </div>
          )}
        </div>
    </aside>
  );
}
