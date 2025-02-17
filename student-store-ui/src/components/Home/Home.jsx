import * as React from "react"
import "./Home.css"
import ProductGrid from "../ProductGrid/ProductGrid"
import Hero from "../Hero/Hero"
import About from "../About/About"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"
// import Hero from "../Hero/Hero"
export default function Home({products, handleAddItemsToCart, handleRemoveItemFromCart}) {
  return (
    <div className="home">
      <Hero />
      <ProductGrid products={products} handleAddItemsToCart ={handleAddItemsToCart} handleRemoveItemFromCart= {handleRemoveItemFromCart}/>
      <About />
      <Contact />
      <Footer />
    </div>
  )
}