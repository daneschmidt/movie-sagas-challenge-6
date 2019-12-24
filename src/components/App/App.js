import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Details from '../pages/Details/Details';
import Update from '../pages/Update/Update';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div className="App"></div>
        <Route path="/" exact component={Home} />
        <Route path="/details" exact component={Details} />
        <Route path="/update" exact component={Update} />
      </Router>
    );
  }
}

export default App;
