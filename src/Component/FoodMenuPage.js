import React, { Component } from 'react';
import Menu from "./Menu";
import Footer from "./Footer";
import CxReviews from "./CxReviews";
import FoodMenuSection from "./FoodMenuSection";
import QuoteSection from "./QuoteSection";
import PageHeaderSection from "./PageHeaderSection";

class FoodMenuPage extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <PageHeaderSection title="Food Menu"/>
        <FoodMenuSection />
        <QuoteSection />
        <CxReviews />
        <Footer />
      </div>
    )
  }
}

export default FoodMenuPage;
