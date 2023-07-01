import React, { useState } from "react"
import "./ProductCard.css"
import { BrowserRouter, Link } from "react-router-dom"

 export default function ProductCard({product, productId, handleAddItemsToCart, handleRemoveItemFromCart, showDescription}){
    
    const [IncrementedValue, setIncrementedValue] = useState(0)
    // console.log(product)

    function selectedValue(){
    if (IncrementedValue <= 0){
        return "";
    }else{
        return IncrementedValue;
    }
    }


    return(
        <section className="product-card">
      <div className="product-card">
      <div className="product-name"><h1>{product.name}</h1></div>
        
        {/* TODO: FIX according sto specifications */}
        <Link to={"/products/" + product.id}> 
        {/* TODO: Get it to navigate to description page when clicked */}
            <img className="product-img" src={product.image}></img>
        </Link>
        <div className="container">
        <button className="add" 
        onClick={() => {
        handleAddItemsToCart(productId, product.price,product);
        setIncrementedValue(IncrementedValue +1)
        }}>
            <h3>+</h3>
        </button>
        <h3>{selectedValue()}</h3>
       
        <button className="remove" 
        onClick={() => {
        handleRemoveItemFromCart(productId, product.price, product.name);
        setIncrementedValue(IncrementedValue -1)   
        }}>
            <h3>-</h3>
        </button>
        </div>
        <div className="product-price">
            <p className="price">Price: ${product.price}</p>
        </div>
        {showDescription == true
          ? <div className="product-description"><p className="description">{product.description}</p></div>
          :<div></div>
        }
      </div> 
    </section>
    )
 }