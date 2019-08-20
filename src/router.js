import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import { Mine }from './pages/main'
const BasicRoute = () => (
  <Router>
    <Route exact path="/" component={Home} />
    <Route path="/About" component={About} />
    <Route path="/Mine" component={Mine} />
  </Router>
);
  
export default BasicRoute;