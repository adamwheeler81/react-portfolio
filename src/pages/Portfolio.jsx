import React, { Component } from 'react';

import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import './Portfolio.css';


class Portfolio extends Component {
    render() {
      return (
        <div>
          <Navbar />
          <Jumbotron title="Portfolio" />
          <div>
        <section className="inner-container hero">
          <h1>Here are a few projects I've been working on in Coding Bootcamp</h1>
        </section>
        <section className="border project-list">
          <div className="inner-container">
            <ul className="post-list no-bullet">
              <li className="border-bottom">
                <h3>Tickr</h3>
                <p>Tickr is a personalized news app that lets the user customize the flow of news to be relevant to their interests. The user will be prompted to sign in with their e-mail, and customize the type of news they want to see, organized by which countries they want their news source to be from. As a consumer, I want access to various news outlets. I want the freedom to search specific topics and have a multitude of results to choose from. The user will be prompted with a web authentication and will be able to save articles to their accounts. Separate API keys are used to grab articles from varying sources such as author, topic, news outlet, etc.</p>
                <a className="transition-link" href="https://unit15project2.herokuapp.com/">
                <img className="tickr-img" src={require('../images/tickr.png')} alt="tickr"/>
                </a>
                <h3><a className="transition-link" href="https://github.com/adamwheeler81/project2">Link to Github Repository</a></h3>                    
              </li>            
              <li className="border-bottom">
                <h3>Gluten-Tootin!</h3>
                <p>This is an app for searching for gluten-free recipes and restaurants.
                  We developed this app for users to search for gluten-free recipes, and also provide a list of restaurants with similar gluten-free options.
                  As a person with certain dieting restrictions, I want to be able to search for food that fits into my diet plan, so that I won’t eat food that is potentially harmful.</p>
                <a className="transition-link" href="https://adamwheeler81.github.io/project1/">
                <img className="glutentootin-img" src={require('../images/glutentootin.png')} alt="glutentootin"/>
                </a>
                <h3><a className="transition-link" href="https://github.com/adamwheeler81/project1">Link to Github Repository</a></h3>
              </li>
              <li className="border-bottom">
                <h3>Weather App</h3>
                <p>Functioning weather application. This is a weather dashboard application with search functionality to find current weather conditions and the future weather outlook for multiple cities. As a traveler I want to see the weather outlook for multiple cities so that I can plan a trip accordingly</p>
                <a className="transition-link" href="https://adamwheeler81.github.io/weatherApp/#">
                <img className="weatherApp-img" src={require('../images/weatherApp.png')} alt="weatherApp"/>
                </a>
                <h3><a className="transition-link" href="https://github.com/adamwheeler81/weatherApp">Link to Github Repository</a></h3>
              </li>
              <li className="border-bottom">
                <h3>Day Planner</h3>
                <p>This is a functional Day Planner application. The application displays timeblocks for standard business hours (9 a.m. to 5 p.m.). Each timeblock contains an input field and save button. Clicking a timeblock's "Save" button stores the input text in local storage, allowing the text to persist when the application is refreshed. The current day is displayed at the top of the calendar. Each timeblock is color coded to indicate whether it is in a past, present, or future hour.</p>
                <a className="transition-link" href="https://adamwheeler81.github.io/homework5/homework5/">
                <img className="dayPlanner-img" src={require('../images/dayPlanner.png')} alt="dayPlanner"/>
                </a>
                <h3><a className="transition-link" href="https://github.com/adamwheeler81/homework5">Link to Github Repository</a></h3>                    
              </li>
              <li className="border-bottom">
                <h3>Eat-Da-Burger!</h3>
                <p>This app is a "burger logger" with MySQL, Node, Express, Handlebars and a homemade ORM (yum!), using the MVC design pattern. Node and MySQL are used to query and route data in the app, and Handlebars to generate the HTML. Create new burgers and devour them!</p>
                <a className="transition-link" href="https://sheltered-ravine-77605.herokuapp.com/">
                <img className="eatdaburger-img" src={require('../images/eatdaburger.png')} alt="eatdaburger"/>
                </a>
                <h3><a className="transition-link" href="https://github.com/adamwheeler81/eat-da-burger">Link to Github Repository</a></h3>                    
              </li>
            </ul>
          </div>
        </section>
      </div>
      </div>
      );
    }
  }
  export default Portfolio;