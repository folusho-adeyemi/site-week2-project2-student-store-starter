import * as React from "react"
import "./Contact.css"

export default function Contact() {
  return (
    <section className="contact">
       <div className="about" id="About">
        <h3 className="contact-header">Contact Us</h3>
      <div className="content">
        <div className="summary">
          <div className="description-column">
          <div className="contact-value">
            <p className="contact-value">"Email: code@path.org</p>
            <p className="contact-value">" Phone:   1-800-CODEPATH"</p>
            <p className="contact-value">"Address:   123 Fake Street, San Francisco, CA"</p>
          </div>
          </div>
          <div className="image-column">
            <div >
              <img className="media" src="https://codepath-student-store-demo.surge.sh/assets/happy_person.517b658d.svg" height="px" width="400px" alt="logo"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}