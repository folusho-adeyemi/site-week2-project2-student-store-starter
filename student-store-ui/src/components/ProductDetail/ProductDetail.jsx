import "./ProductDetail.css"
import { useParams } from "react-router-dom";



export default function ProductDetail({ products , handleAddItemsToCart, handleRemoveItemFromCart}){
    const { productId } = useParams();
    // console.log(products)
    
    // Find the product with the matching productId
    // Assuming your products array is accessible in this component
    const data = products.find((data) => data.id === parseInt(productId));
    // console.log(data.price)
    
    if (data) {
        return (
            <div className="product-detail">
            <div className="product-name">
                <h1>Product #{data.id}</h1>
                <h2>{data.name}</h2></div>
              <div className="container">
                <img src ={data.image}></img>
                <h3>Description: {data.description}</h3>
              <button className="add" onClick={() => handleAddItemsToCart(productId, data.price)}>
                  <h3>+</h3>
              </button>
              <button className="remove" onClick={() => handleRemoveItemFromCart(productId,data.price)}>
                  <h3>-</h3>
              </button>
              </div>
              <div className="product-price">
                  <p className="price">Price: ${data.price}</p>
              </div>
              </div>
        )
        }
      // Render a message indicating the product was not found
      return (<p>Product not found</p>)
}
