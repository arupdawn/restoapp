import React, { Component } from 'react';
import AboutImg from "../Photos/about-img.jpg";

class AboutSection extends Component {
  render() {
    return (
      <div>
        <div className="AboutContent">
            <img className="AboutImage" src={AboutImg}/>

            <div className="AboutText">
              <h2 className="AboutHeader">Welcome To Yamifood Restaurant</h2>

              <br></br>
              <p>Yamifood Catering was created in 2006 out of a passion for amazing food and service.
                 The then one-man operation saw rapid growth after booking its very first event—catering 
                 the anniversary party for the Austin Film Society and its 1,000 guests.
              
              <br></br><br></br>
              
              Through word of mouth, a lot of hard work and a commitment to producing
              one-of-a-kind events, Yamifood has become one of the most beloved catering 
              companies in Austin..</p>
            </div>

        </div>
      </div>
    )
  }
}

export default AboutSection;