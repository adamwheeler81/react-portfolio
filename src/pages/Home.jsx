import React, { Component } from 'react';

import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import '../images/profilePhoto.jpg';
import './Home.css';

class Home extends Component {
  render() {
    return (
      
      <div>
        <Navbar />
        <Jumbotron title="Welcome" />
        <div className="container">
          <div className="col-8">
            <h2>Hello!</h2>
              <p>My name is Adam James Wheeler. I was born and raised in the Chicago area. I have always had a passion for the arts, namely music and film. As a child, I played piano, saxophone, and guitar.

                I attended film school from 2000-2005, through Columbia College Chicago, and the Colorado Film School, respectively, where I attained an Associate's Degree in Cinematography.
                
                After school I spent more time pursuing music. I have been in many bands over the years, and have toured the U.S. and Europe.
                
                While my bands have been somewhat successful in the underground, I still require a day job to make ends meet. I have been working in the restaurant industry for over 10 years, doing everything from basic line cooking, to managing a full-scale commissary kitchen.
                
                I am very much looking forward to starting a new career in the tech industry, and hope to learn more about the world of coding as I make my way through this new and exciting field.</p>
           
          </div>
          <div className="col-2">
            <img className="profile" src={require('../images/profilePhoto.jpg')}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Home
