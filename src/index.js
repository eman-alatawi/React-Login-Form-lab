import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './containers/Login'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

const routing = (
  <Router>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
    <Route path="/" exact component={App}/>
    <Route path="/login" component={Login}/>

  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);


