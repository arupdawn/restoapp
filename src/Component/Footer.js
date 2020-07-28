import React, { Component } from 'react';

class Footer extends Component {

    constructor(props){
        super(props)
    
    }
  render() {
      return (
        <div >
            <div className="ContactStrip">
            <div className="ContactDetails">
              <i className="fa fa-volume-control-phone"></i>
              <span className="Ct-detailsStyle">Phone<br></br>+01 123-456-4590</span>
            </div>

            <div className="ContactDetails">
              <i class="fa fa-envelope"></i>
              <span className="Ct-detailsStyle">Email<br></br>yourmail@gmail.com</span>
            </div>

            <div className="ContactDetails">
              <i className="fa fa-map-marker"></i>
              <span className="Ct-detailsStyle">Location<br></br>800, Lorem Street, US</span>
            </div>
          </div>

          <div className="MoreInfoStrip">
            
            <div className="MoreInfoInnerStrip">
              <div className="MoreInfoDetails">
                <h4>OPENING HOURS </h4>
                <p>Monday : Closed</p>
                <p>Tue-Wed : 9:Am - 10PM</p>
                <p>Thu-Fri : 9:Am - 10PM</p>
                <p>Sat-Sun : 5:PM - 10PM</p>
              </div>

              <div className="MoreInfoDetails">
                <h4>CONTACT INFORMATION </h4>
                <p>Ipsum Street, Lorem Tower, MO, Columbia,<br></br> 508000</p>
                <p>+01 2000 800 9999</p>
                <p>info@admin.com</p>
              </div>

              <div className="MoreInfoDetails">
                <h4>SUBSCRIBE</h4>
                <i class="fa fa-facebook-square" aria-hidden="true"></i>
                <i class="fa fa-instagram" aria-hidden="true"></i>
                <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                <i class="fa fa-twitter-square" aria-hidden="true"></i>
              </div>

              
            </div>
          </div>

            <div className="Footer">
            <footer>
                <div className="footer-copyright text-center py-3">
                All Rights Reserved. © 2008-2020 Yamifood Restaurant Designed By : Arup Chandra Dawn
                </div>
            </footer>
            </div>
        </div>
      );
  }
}

export default Footer;