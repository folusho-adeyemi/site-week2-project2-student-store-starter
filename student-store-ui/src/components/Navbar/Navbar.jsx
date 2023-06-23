import * as React from "react"
import "./Navbar.css"
import Logo from "../Logo/Logo"
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="navbar">
      
      <div className="content">
        <Logo/>
        <div className="socials">
            <Link className="icons" to="">
              <img className="logo-pic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMEiYSyunHcn-5DSPWkzX2IluStE3TTPADrQ&usqp=CAU" ></img>
            </Link> 
            <Link className="icons" to="">
              <img className="logo-pic" src="https://www.seekpng.com/png/detail/23-231445_facebook-logo-facebook-logo-transparent-white.png"></img>
            </Link>
            <Link className="icons" to="">
               <img className="logo-pic instagram" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJrhYgBJQJT3zljgMO5YrZqSvufaqT_9hWRwHR-fZRbg6WVXtDDEeQxd4pJVuY3WBZy70&usqp=CAU"></img>
            </Link>
        </div>
        <div className="link">
        <ul className="links">
          <li>
            <Link className="pages" to="">Home</Link>
          </li>
          <li>
            <Link className="pages" to="">About Us</Link>
          </li>
          <li>
            <Link className="pages" to="">Contact Us</Link>
          </li>
          <li>
            <Link className="pages" to="">Buy Now</Link>
          </li>
        </ul>
        </div>
      </div>
      {/* <p>Navbar</p> */}
    </nav>
  )
}
