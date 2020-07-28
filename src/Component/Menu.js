import React, { Component } from 'react';
import Logo from "../Photos/logo.png";
import {Link} from 'react-router-dom';

class Menu extends Component {

    constructor(props){
        super(props)
    }
    
    render() {
        return (
            <div className="Outer-menu">
                <div className="Menu-style">
                    <button style={{float: "right"}} type="button" className=" btn btn-light" data-toggle="collapse" 
                                    data-target={"#copp"}>
                        <div className="menu"></div>
                        <div className="menu"></div>
                        <div className="menu"></div>
                    </button> 
                        {' '}{" "}

                    <img style={{float: "left"}} id="SiteTitle" className="Logo" src={Logo}></img>

                    <Link to ="/Contact" style={{marginRight: "50px"}}> Contact Us</Link>
                    <Link to ="/Blog">Blog</Link>
                    <Link to ="/Reservation">Resevation</Link>
                    <Link to ="/AboutUs">About</Link>
                    <Link to ="/FoodMenu">Menu</Link>
                    <Link to ="/">Home</Link>
                    

                </div>

                <div id="copp" className="collapse topnav">
                    <div id="myLinks" >
                        <Link to ="/">Home</Link>
                        <Link to ="/FoodMenu">Menu</Link>
                        <Link to ="/AboutUs">About</Link>
                        <Link to ="/Reservation">Reservation</Link>
                        <Link to ="/Blog">Blog</Link>
                        <Link to ="/Contact">Contact Us</Link>
                    </div>
                </div>

            </div>
        );
  }
}

export default Menu;