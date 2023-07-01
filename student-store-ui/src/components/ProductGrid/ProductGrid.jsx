import "./ProductGrid.css";
import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";


export default function ProductGrid({ products, handleAddItemsToCart, handleRemoveItemFromCart }) {
    const [showMenu, setShowMenu] = useState(true);
    const [searched, setSearched] = useState("");
    const regexp = new RegExp(searched, "i");
    const [clickedCategory, setClickedCategory] = useState("");
  
    const handleShowMenu = () => {
      setShowMenu(!showMenu);
    };
  
    const handleClick = (category) => {
      setClickedCategory(category);
    };
  
    const handleSearched = (event) => {
      const searched = event.target.value;
      setSearched(searched);
    };
  
    let currProds = clickedCategory ? products.filter((product) => product.category === clickedCategory):products
    let currSearch = currProds.filter((product) => regexp.test(product.name));
  
    return (
      <section className="products">
        <form method="get" onChange={(event) => handleSearched(event)}>
          <div className="tb">
            <div className="td">
              <input className="search-text" type="text" required />
            </div>
            <div id="cover"></div>
            <div className="td" id="s-cover">
              <button className="search" type="submit">
                <div id="s-circle"></div>
                <span></span>
              </button>
            </div>
          </div>
        </form>
  
        {showMenu === true ? (
          <div className="menu">
            <ul className="category-menu">
              <button className="toggle-menu" onClick={() => handleShowMenu()}>
                <i className="material-icons">menu</i>
              </button>
              <li>
                <button className="menu-btn" onClick={() => handleClick("")}>
                  All Categories
                </button>
              </li>
              <li>
                <button className="menu-btn" onClick={() => handleClick("clothing")}>
                  Clothing
                </button>
              </li>
              <li>
                <button className="menu-btn" onClick={() => handleClick("food")}>
                  Food
                </button>
              </li>
              <li>
                <button className="menu-btn" onClick={() => handleClick("accessories")}>
                  Accessories
                </button>
              </li>
              <li>
                <button className="menu-btn" onClick={() => handleClick("tech")}>
                  Tech
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <button className="toggle-menu" onClick={() => handleShowMenu()}>
            <i className="material-icons">menu</i>
          </button>
        )}
  
        <div className="products-grid">
          {searched === "" && clickedCategory !== "" ? (
            currProds.map((product,idx) => (
              <ProductCard
                product={product}
                productId={product.id}
                handleAddItemsToCart={handleAddItemsToCart}
                handleRemoveItemFromCart={handleRemoveItemFromCart}
                showDescription={false}
                key={idx}
              />
            ))
          ) : searched === "" && clickedCategory === "" ? (
            products.map((product, idx) => (
              <ProductCard
                product={product}
                productId={product.id}
                handleAddItemsToCart={handleAddItemsToCart}
                handleRemoveItemFromCart={handleRemoveItemFromCart}
                showDescription={false}
                key={idx}
              />
            ))
          ) : (currSearch.map((product, idx) => (
            <ProductCard
              product={product}
              productId={product.id}
              handleAddItemsToCart={handleAddItemsToCart}
              handleRemoveItemFromCart={handleRemoveItemToCart}
              showDescription={false}
              key={idx}
            />
          )))}
        </div>
      </section>
    );
  }
  