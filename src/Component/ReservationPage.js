import React, { Component } from 'react';
import Menu from "./Menu";
import Footer from "./Footer";
import PageHeaderSection from "./PageHeaderSection";
import CxReviews from "./CxReviews";

class ReservationPage extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <PageHeaderSection title="Reservation" />
        <div className="Reservation">
            <h2>Book A Table</h2>
            <form>
                <input type="date" className="form-control" required/>
                <br></br>
                <select className="form-control" name="cars" id="cars" required>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="12:30 PM">12:30 PM</option>
                    <option value="01:00 PM">01:00 PM</option>
                    <option value="01:30 PM">01:30 PM</option>
                    <option value="02:00 PM">02:00 PM</option>
                    <option value="02:30 PM">02:30 PM</option>
                    <option value="03:00 PM">03:00 PM</option>
                    <option value="03:30 PM">03:30 PM</option>
                </select>
                <br></br>
                <select className="form-control" required>
                    <option value="0">No of. Persons</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <input type="text" className="form-control" placeholder="Your Name" required/>
                <br></br>
                <input type="text" className="form-control" placeholder="Your Email" required/>
                <br></br>
                <input type="text" className="form-control" placeholder="Your Number" required/>
                <br></br>
                <button type="submit" className="btn btn-outline-dark Book">Book Table</button>
            </form>

        </div>
        <CxReviews />
        <Footer />
      </div>
    )
  }
}

export default ReservationPage;