import React, { Component } from 'react';
import Menu from "./Menu";
import Footer from "./Footer";
import PageHeaderSection from "./PageHeaderSection";

class ContactPage extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <PageHeaderSection title="Contact Us"/>
        <div className="Reservation">
            <h2>Contact</h2>
            <form>
                <input type="text" className="form-control" placeholder="Your Name" required/>
                <br></br>
                <input type="text" className="form-control" placeholder="Your Email" required/>
                <br></br>
                <input type="text" className="form-control" placeholder="Your Number" required/>
                <br></br>
                <textarea id="MessageArea" className="form-control" placeholder="Your Message" required>
                </textarea><br></br>
                <button type="submit" className="btn btn-outline-dark Book">Send Message</button>
            </form>
        </div>
        <Footer />
      </div>
    )
  }
}

export default ContactPage;