import React from "react";
import "./ShoppingCart.css";

const TAX_RATE = 0.0875; // 8.75%

export default function ShoppingCart({ isOpen, shoppingCart, products, handleAddItemsToCart ,handleRemoveItemToCart }) {
    // console.log(shoppingCart)
  const calculateSubtotal = () => {
    let subtotal = 0;

    shoppingCart.forEach((item) => {
      const product = products.find((item) => products.itemId === item.itemId);
      console.log(product)
      if (product) {
        subtotal += product.price * item.quantity;
      }
    });

    return subtotal.toFixed(2);
  };

  const calculateTax = () => {
    const subtotal = parseFloat(calculateSubtotal());
    const tax = subtotal * TAX_RATE;

    return tax.toFixed(2);
  };

  const calculateTotal = () => {
    const subtotal = parseFloat(calculateSubtotal());
    const tax = parseFloat(calculateTax());
    const total = subtotal + tax;

    return total.toFixed(2);
  };

  return (
    <div className={`shopping-cart ${isOpen ? "open" : ""}`}>
      {shoppingCart.length > 0 ? (
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {shoppingCart.map((item) => {
              const product = products.find((p) => p.itemId === item.itemId);
              if (product) {
                const subtotal = (product.price * item.quantity).toFixed(2);

                return (
                  <tr key={item.itemId}>
                    <td>{product.name}</td>
                    <td>{item.quantity}</td>
                    <td>${subtotal}</td>
                  </tr>
                );
              }
              return null;
            })}
            <tr>
              <td colSpan="2">Subtotal:</td>
              <td>${calculateSubtotal()}</td>
            </tr>
            <tr>
              <td colSpan="2">Tax:</td>
              <td>${calculateTax()}</td>
            </tr>
            <tr>
              <td colSpan="2">Total:</td>
              <td>${calculateTotal()}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <div className="notification">No items added to cart yet. Start shopping now!</div>
      )}
    </div>
  );
}
