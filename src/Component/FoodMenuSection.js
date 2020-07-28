import React, { Component } from 'react';

import MenuImg1 from "../Photos/img-01.jpg";
import MenuImg2 from "../Photos/img-02.jpg";
import MenuImg3 from "../Photos/img-03.jpg";
import MenuImg4 from "../Photos/img-04.jpg";
import MenuImg5 from "../Photos/img-05.jpg";
import MenuImg6 from "../Photos/img-06.jpg";
import MenuImg7 from "../Photos/img-07.jpg";
import MenuImg8 from "../Photos/img-08.jpg";
import MenuImg9 from "../Photos/img-09.jpg";

class FoodMenuSection extends Component {
  render() {
    return (
      <div>
        <div className="MenuItems">
          <h3 className="MenuHeader">Special Menu</h3>
          
          <div className="MenuContent">
              <img src={MenuImg1}/>
              <img src={MenuImg2}/>
              <img src={MenuImg3}/>
              <img src={MenuImg4}/>
              <img src={MenuImg5}/>
              <img src={MenuImg6}/>
              <img src={MenuImg7}/>
              <img src={MenuImg8}/>
              <img src={MenuImg9}/>
          </div>
        </div>
      </div>
    )
  }
}

export default FoodMenuSection;
