import * as React from "react"
import "./Hero.css"
import ProductGrid from "../ProductGrid/ProductGrid";

export default function Hero(products, handleAddItemsToCart, handleRemoveItemToCart) {
  return (
    <div className="hero">
        <section className='banner'>
            <div className="texts">
            <h1>Welcome to the Merch Store!!</h1>
            <h1 >Find your Merch!!!</h1>
            </div>
          <img className="hero-image" src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/wfsonfv0p92plryzwijf"></img>
       </section>
  </div>
  )
}
