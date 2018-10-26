import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import Title from './components/Title';
import MainCard from './components/MainCard';
import AboutCard from './components/AboutCard';
import PortfolioCard from './components/PortfolioCard/PortfolioCard';
import BlogCard from './components/BlogCard/BlogCard';
import ContactCard from './components/ContactCard/ContactCard';

import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
    <Router>
      <div className="main">
        <Title />
        <div className="wrapper">
          <MainCard />
          

              <Route exact path="/" component={AboutCard} />
              <Route exact path="/About" component={AboutCard} />
              <Route exact path="/Portfolio" component={PortfolioCard} />
              <Route exact path="/Blog" component={BlogCard} />
              <Route path="/Contact" component={ContactCard} />  
        </div>
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
