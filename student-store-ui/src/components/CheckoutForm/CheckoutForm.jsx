import "./CheckoutForm.css"
import React, {useState} from "react"
import Receipt from "../Receipt/Receipt";

export default function CheckoutForm ({updateUserDetails, isOpen, setShowReceipt, showReceipt,shoppingCart, checkoutForm,handleOnCheckoutFormChange,handleOnSubmitCheckoutForm}) {
    const [formData, setFormData] = useState ({
        name:"",
        email:""
    })
    const [formError, setFormError] = useState("");
  const {name, email, error} = checkoutForm;
  
  const handleOnSubmit = (event) => {
    // handleOnSubmitCheckoutForm(shoppingCart)
    if(!formData.name || !formData.email) {
        setFormError("Please provide both name and email");
    } else {
        setFormError("");
    }
    event.preventDefault()
    setShowReceipt(true)
}

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData((previousData) => ({
            ...previousData,
            [name]: value,
          }));
    }

  return (
    <div className={`checkout-form ${isOpen ? "open" : ""}`}>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={formData.name}
        //   value={checkoutForm.name}
          onChange={handleChange}
        //   onChange={handleOnCheckoutFormChange}
          className="checkout-form-input"
        />
        <input
          type="email"
          name="email"
          placeholder="student@codepath.org"
          value={formData.email}
        //   value={checkoutForm.email}
          onChange={handleChange}
        //   onChange={handleOnCheckoutFormChange}
          className="checkout-form-input"
        />
        {formError && <p>{formError}</p>
        }
        <button type="submit" className="checkout-button" 
        onClick={(event) => handleOnSubmit(event)}>
          Checkout
        </button>
      </form>

      {error && <div className="error">{error}</div>}

      {/* {showReceipt && <Receipt name = {name} email ={email} showReceipt ={showReceipt} items={shoppingCart} handleShopClick ={handleShopClick} handleExitClick={handleExitClick}/>} */}
    </div>
  );
};