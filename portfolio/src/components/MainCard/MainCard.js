import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';
import React from "react";
import AboutCard from "../AboutCard/AboutCard";
import PortfolioCard from "../PortfolioCard/PortfolioCard";
import "./MainCard.css";
const pic = require ("../../assets/images/profile.png");
const fb = require ("../../assets/images/facebook_logo_detail.gif");
const gitHub = require ("../../assets/images/GitHub-Mark-32px.png");
const linkedIn = require ("../../assets/images/logo.png");

const MainCard = () => 
{
    return(
        
        <div className="card main-card">
            <img className="card-img-top" src={ pic } alt="Profile Pic" />
            <div className="card-body">
                <h5 className="card-title">hello, world</h5>
                <p className="card-text">
                I am currently seeking employment as a Full Stack Web Developer. I have over 20 years personal experience coding in languages such as C#, C++, Java, Python, HTML/CSS, JavaScript, etc., and have taught programming in those languages for 10 years in a college prepatory setting.
                </p>
                
                <Link to="/About">
                    <a className="btn btn-primary" value="about">About</a>
                </Link>
                <Link to="/Portfolio">
                    <a className="btn btn-primary" value="portfolio">Portfolio</a>
                </Link>
                <Link to="/Blog">
                    <a className="btn btn-primary" value="blog">Blog</a>
                </Link>
                <Link to="/Contact">
                    <a className="btn btn-primary" value="contact">Contact</a>
                </Link>
                
                
                
                <div className="social">
                <a href="https://www.facebook.com/kirdmnky" target="_blank"><img alt="fb" id="fb" src= { fb } /></a>
                <a href="https://www.linkedin.com/in/mrmikesoto" target="_blank"><img alt="linkedIn" id="linkedIn" src= { linkedIn } /></a>
                <a href="https://www.github.com/kirdmnky" target="_blank"><img alt="gitHub" id="gitHub" src= { gitHub } /></a>

                


                
                </div>
                
            </div>
        </div>
        
    )
}

export default MainCard;

