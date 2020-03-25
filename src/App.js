import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home.jsx';
import Skills from './pages/Skills.jsx';
import Contact from './pages/Contact.jsx';
import Portfolio from './pages/Portfolio';
import Footer from './pages/footer';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/skills" component={Skills}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/portfolio" component={Portfolio}/>
        </div>
      </Router>
    );
  }
}

export default App;
