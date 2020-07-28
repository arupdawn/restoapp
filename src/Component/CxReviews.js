import React, { Component } from 'react';

import Profile1 from "../Photos/profile-Abhilasha.jpg";
import Profile2 from "../Photos/profile-Manushii.jpg";
import Profile3 from "../Photos/profile-7.jpg";

class CxReviews extends Component {

  render() {
    return (
      <div>
        <div className="CustomerDetails">
          <h3 className="MenuHeader">Customer - Reviews</h3>
          
          <div className="CustomerContent">

            <div className="CustomerCard">
              <img src={Profile1}/>
              <h4 className="CustomerName">SOPHIA MITCHEL</h4>
              <h7 className="CustomerDesig">Web Developer</h7>
              
              <p>Although we didn't go into the onsite restaurant, we ordered some food at the 
                bar a few times and it was delicious. The bar area and lobby were nice and open,
                 good place to relax and meet friends.</p>

            </div>

            <div className="CustomerCard">
              <img src={Profile2}/>
              <h4 className="CustomerName">AMELIA JONES</h4>
              <h7 className="CustomerDesig">Food Blogger</h7>

              <p>Had dinner with girl friends. Menu is perfect, something for everyone. 
                Service was awesome and Jason was very accommodating. Will be back definitely!
              </p>
            </div>

            <div className="CustomerCard">
              <img src={Profile3}/>
              <h4 className="CustomerName">CHRIS GILCHRIST</h4>
              <h7 className="CustomerDesig">Data Scientist</h7>

              <p>We had lunch here a few times while on the island visiting family and friends. 
                The servers here are just wonderful and have great memories it seems. We sat on 
                the ocean front patio and enjoyed the view with our delicious wine and lunch. Must try!</p>
            </div>
          </div>

          
        </div>
      </div>
    )
  }
}

export default CxReviews;



