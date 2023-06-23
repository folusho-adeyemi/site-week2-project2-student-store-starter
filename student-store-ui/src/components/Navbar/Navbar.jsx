import * as React from "react"
import "./Navbar.css"
import Logo from "../Logo/Logo"

export default function Navbar() {
  return (
    <nav className="navbar">
      
      <div className="content">
        <Logo/>
        <div className="socials">
            <a className="icons" href="">
              <img className="logo-pic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMEiYSyunHcn-5DSPWkzX2IluStE3TTPADrQ&usqp=CAU" ></img>
            </a> 
            <a className="icons" href="">
              <img className="logo-pic" src="https://www.seekpng.com/png/detail/23-231445_facebook-logo-facebook-logo-transparent-white.png"></img>
            </a>
            <a className="icons" href="">
               <img className="logo-pic instagram" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJrhYgBJQJT3zljgMO5YrZqSvufaqT_9hWRwHR-fZRbg6WVXtDDEeQxd4pJVuY3WBZy70&usqp=CAU"></img>
            </a>
        </div>
        <div className="link">
        <ul className="links">
          <li>
            <a className="pages" href="">Home</a>
          </li>
          <li>
            <a className="pages" href="#About">About Us</a>
          </li>
          <li>
            <a className="pages" href="#Contact">Contact Us</a>
          </li>
          <li>
            <a className="pages" href="#Buy">Buy Now</a>
          </li>
        </ul>
        </div>
      </div>
      {/* <p>Navbar</p> */}
    </nav>
  )
}
