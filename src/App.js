import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

export default class App extends Component {
   pageSize = 15;
   generateKey = (category) => {
    return category.toLowerCase().replace(/\s/g, '') + '_news';
  }
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Route>
            <Route exact path="/business"><News key={this.generateKey("Business")} pageSize={this.pageSize} country="in" category="business" /></Route>
            <Route exact path="/entertainment"><News key={this.generateKey("Entertainment")} pageSize={this.pageSize} country="in" category="entertainment" /></Route>
            <Route exact path="/general"><News key={this.generateKey("General")} pageSize={this.pageSize} country="in" category="general" /></Route>
            <Route exact path="/health"><News key={this.generateKey("Health")} pageSize={this.pageSize} country="in" category="health" /></Route>
            <Route exact path="/science"><News key={this.generateKey("Science")} pageSize={this.pageSize} country="in" category="science" /></Route>
            <Route exact path="/sports"><News key={this.generateKey("Sports")} pageSize={this.pageSize} country="in" category="sports" /></Route>
            <Route exact path="/technology"><News key={this.generateKey("Technology")} pageSize={this.pageSize} country="in" category="technology" /></Route>
          </Route>
        </Router>
      </div>
    )
  }
}

