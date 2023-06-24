import * as React from "react"
import "./Contact.css"

export default function Contact() {
  return (
    <section className="contact">
       <div className="about" id="About">
        <h3>Contact Us</h3>
      <div className="content">
        <div className="summary">
          <div className="description-column">
          <div className="text">
            <p>"Email: code@path.org</p>
            <p>" Phone:   1-800-CODEPATH"</p>
            <p>"Address:   123 Fake Street, San Francisco, CA"</p>
          </div>
          </div>
          <div className="image-column">
            <div className="media">
              <img src="https://i.pinimg.com/originals/c8/4c/34/c84c346b3f81654f824855c5a3281dbd.gif" height="400px" width="400px" alt="logo"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}