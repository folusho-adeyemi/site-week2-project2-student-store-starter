import React,{useEffect, useState} from "react";
import "./ShoppingCart.css";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const TAX_RATE = 0.0875; // 8.75%

export default function ShoppingCart({ isOpen, shoppingCart, products, subtotal, tax, total, setSubtotal, setTax, setTotal}) {
  const calculateSubtotal = () => {
    let subtotal = 0;
    
  Object.values(shoppingCart).forEach((item) => {
    const product = products.find((prod) => prod.id === parseInt(item.itemId));

    if (product) {
      const itemSubtotal = product.price * item.quantity;
      subtotal += itemSubtotal;
    }
  });

    const subtotalValue = subtotal.toFixed(2);
    setSubtotal(subtotalValue);

    return subtotalValue;
  };

  const calculateTax = () => {
    const subtotalValue = parseFloat(calculateSubtotal());
    const taxValue = subtotalValue * TAX_RATE;
    
    const taxValueFormat = taxValue.toFixed(2);
    setTax(taxValueFormat);

    return taxValueFormat;
  };

  const calculateTotal = () => {
    const subtotalValue = parseFloat(calculateSubtotal());
    const taxValue = parseFloat(calculateTax());
    const totalValue = subtotalValue + taxValue;

    const totalValueFormat = totalValue.toFixed(2);
    setTotal(totalValueFormat);

    return totalValueFormat;
};

  return (
    <div className={`shopping-cart ${isOpen ? "open" : ""}`}>
      {Object.keys(shoppingCart).length > 0 ? (
        <div className="items-header">
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Unit pricee</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            {Object.values(shoppingCart).map((item) => {
              const product = products.find((prod) => prod.id === parseInt(item.itemId));
              console.log(product)
              if (product) {
                const subtotal = (product.price * item.quantity).toFixed(2);
                return (
                  <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{item.quantity}</td>
                    <td>${product.price}</td>
                    <td>${subtotal}</td>
                  </tr>
                );
              }
              return null;
            })}
            <tr>
              <td colSpan="3"><b>Subtotal:</b></td>
              <td><b>${calculateSubtotal()}</b></td>
            </tr>
            <tr>
              <td colSpan="3"><b>Taxes and fees:</b></td>
              <td><b>${calculateTax()}</b></td>
            </tr>
            <tr>
              <td colSpan="3"><b>Total:</b></td>
              <td><b>${calculateTotal()}</b></td>
            </tr>
          </tbody>
        </table>
        </div>
      ) : (
        <div className="notification">No items added to cart yet. Start shopping now!</div>
      )}
    </div>
  );
}