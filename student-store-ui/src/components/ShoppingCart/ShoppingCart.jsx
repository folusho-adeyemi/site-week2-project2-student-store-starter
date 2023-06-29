import React from "react";
import "./ShoppingCart.css";

const TAX_RATE = 0.0875; // 8.75%

export default function ShoppingCart({ isOpen, shoppingCart, products, handleAddItemsToCart ,handleRemoveItemToCart }) {
    // console.log(shoppingCart)
  const calculateSubtotal = () => {
    let subtotal = 0;
    
  Object.values(shoppingCart).forEach((item) => {
    const product = products.find((prod) => prod.id === parseInt(item.itemId));
    console.log(product)
    if (product) {
      const itemSubtotal = product.price * item.quantity;
      subtotal += itemSubtotal;
      // console.log(`Item ID: ${item.itemId}, Quantity: ${item.quantity}, Subtotal: ${itemSubtotal}`);
    }
  });


    console.log("subtotal ", subtotal)
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
console.log("Hello", isOpen, typeof shoppingCart,)
  return (
    <div className={`shopping-cart ${isOpen ? "open" : ""}`}>
      {Object.keys(shoppingCart).length > 0 ? (
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Subtotal</th>
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
