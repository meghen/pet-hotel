import React, { Component } from 'react';
import './App.css';

// import { connect } from 'react-redux';
import { 
  HashRouter as Router, 
  Route, 
  Link,
 } from 'react-router-dom'

import Dashboard from '../Dashboard/Dashboard.js'
import ManageOwners from '../ManageOwners/ManageOwners.js'



class App extends Component {
  render() {
    return (
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/ManageOwners">ManageOwners</Link>
            </li>
          </ul>
        </nav>
        <div className="App">
           <Route path="/" component={Dashboard} exact />
           {/* <Dashboard /> */}
           <Route path="/ManageOwners" component={ManageOwners} />
           {/* <ManageOwners /> */}
        </div>
      </Router>
    );
  }
}

export default App;
