import React, { Component } from 'react';
import Menu from "./Menu";
import Footer from "./Footer";
import FoodMenuSection from "./FoodMenuSection";
import PageHeaderSection from "./PageHeaderSection";
import AboutSection from "./AboutSection";

class AboutUsPage extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <PageHeaderSection title="About Us" />
        <AboutSection />
        <div className="AboutTextMore">
              
              <p>We believe that using the freshest ingredients produces the best results. 
                  We are tireless in staying abreast of the latest food trends. And we are 
                  obsessed with creating customized menus and culinary masterpieces for our 
                  clients. Simply put: we exist to make your vision a reality.
              <br></br><br></br>
              YamiFood is a member the Austin Chamber of Commerce; Austin Youth and Chronic 
              Chamber of Commerce; National Association of Catering Executives (NACE); and International 
              Special Events Society (ISES).</p>

        </div>
        <FoodMenuSection />
        <Footer />
      </div>
    )
  }
}

export default AboutUsPage;