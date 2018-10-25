import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import MainCard from './components/MainCard';
import AboutCard from './components/AboutCard';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <div className="main">
        <Title />
        <div className="wrapper">
          <MainCard />
          <AboutCard />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
