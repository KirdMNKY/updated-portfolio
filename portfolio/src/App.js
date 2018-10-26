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
import PortfolioCard from './components/PortfolioCard';

import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <div className="main">
        <Title />
        <div className="wrapper">
          <MainCard />
          <Router>
          <Switch>
                    <Route exact path="/" component={AboutCard} />
                    <Route exact path="/About" component={AboutCard} />
                    <Route exact path="/Portfolio" component={PortfolioCard} />
                    {/* <Route exact path="/Blog" component={Blog} />
                    <Route path="/Contact" component={Contact} />  */}
                </Switch>
          </Router>
          <AboutCard />
          <PortfolioCard />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
