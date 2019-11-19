import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Brands from './components/Brands';
import Transporters from './components/Transporters';

export default class App extends Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link to="/" className="navbar-brand" id="text">Intugine</Link>
              <button type="button" className="navbar-toggle" data-target="#myNavbar" data-toggle="collapse">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>

            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav navbar-right">
                <li className="active">
                  <Link to ="/home" id="active">Home</Link>
                </li>
                <li>
                  <Link to ="#" id="text">Brands</Link>
                </li>
                <li>
                  <Link to ="#" id="text">Transporters</Link>
                </li>
              </ul> 
            </div>
          </div>
        </nav>
        <div className="container">
          <Switch>
            <Route  exact path="/" component={Home}/>
            <Route  exact path="/home" component={Home}/>
            <Route  exact path="/brands" component={Brands}/>
            <Route  exact path="/transporters" component={Transporters}/>
          </Switch>
        </div>
      </Router>
    )
  }
}
