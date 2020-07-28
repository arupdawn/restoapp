import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FoodMenuPage from './Component/FoodMenuPage';
import AboutUsPage from './Component/AboutUsPage';
import ReservationPage from './Component/ReservationPage';
import ContactPage from './Component/ContactPage';
import BlogPage from './Component/BlogPage';

class App extends Component {
  render() {
    return (
      <Router basename="/restoapp1/">
          <div>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/FoodMenu" exact component={FoodMenuPage}/>
              <Route path="/AboutUs" exact component={AboutUsPage}/>
              <Route path="/Reservation" exact component={ReservationPage}/>
              <Route path="/Contact" exact component={ContactPage}/>
              <Route path="/Blog" exact component={BlogPage}/>
            </Switch>
          </div>
      </Router>
    );
  }
}

export default App;
