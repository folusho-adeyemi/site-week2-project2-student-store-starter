import "./Receipt.css"
import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Receipt({ name, email, showReceipt, items, handleShopClick, handleExitClick, subtotal, total }) {
    console.log(showReceipt)

  return (
    <div className={`receipt ${showReceipt ? "open" : ""}`}>
      <h2>Receipt</h2>
      <p>
        Showing receipt for {name} available at {email}:
      </p>

      <h3>Item Summary:</h3>
      {Object.values(items).map((item, index) => (
        <p key={index}>
          {item.quantity} total {item.name} purchased at a cost of ${item.price.toFixed(2)} for a total cost of ${(item.quantity * item.price).toFixed(2)}
        </p>
      ))}

      <p>Before taxes, the subtotal was ${subtotal}</p>
      <p>After taxes and fees were applied, the total comes out to ${total}</p>

      <div className="buttons">
        <button onClick={handleShopClick}>Shop</button>
        <button onClick={handleExitClick}>MoreExit</button>
      </div>
    </div>
  );
}

