import React, { Component } from 'react';
import Menu from "./Menu";
import Footer from "./Footer";
import CxReviews from "./CxReviews";
import FoodMenuSection from "./FoodMenuSection";
import QuoteSection from "./QuoteSection";
import AboutSection from "./AboutSection";


class Home extends Component {
  render() {
    return (
      <div className="App">
        <Menu />

        <div className="TopContent">
            <div className="TopMainContent">
              <div>
                
                <h1 className="IntroHeader">Welcome{" "} To <br></br>Yamifood{" "} Restaurant</h1>

                <p className="IntroHeaderText">See how your users experience your website in realtime or view <br></br>
                trends to see any changes in performance over time.</p>

                <button type="button" className="btn btn-outline-dark">Reservation</button>
            
              </div>
            </div>
        </div>
        
        <AboutSection />
        <QuoteSection />
        <FoodMenuSection />
        <CxReviews />

        <Footer />
      </div>
    );
  }
}

export default Home;
