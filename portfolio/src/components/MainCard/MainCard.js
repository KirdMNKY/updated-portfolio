import React from "react";
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
                <h5 className="card-title">About Me</h5>
                <p className="card-text">I have had a career in education for thirteen years, and as much as I loved being involved with helping kids grow in their knowledge of not only business and technology education, but also of the world, I need a change. I have been coding casually for about twenty years, and had been teaching coding for about ten of those years.

                {/* I have always dabbled in creating sprites, coding games, teaching application and web development, and, at this point in my life, I feel I am ready to code full-time. I want to create for more than just my own amusement. I want to develop websites, applications, programs, etc. for others to make use of and enjoy!

                As an educator, more specifically a Computer Science educator, I have honed my debugging skills and developed a new way of looking at and percieving a bit of code's purposes. In that knowledge I am able to refine the code to make it more efficient and streamlined.

                I have always felt that I could "see" the underlying code for any program or application I am using. I have that grasp and understanding of how, what, where, when, and why the code does what it does. I wish to put this skill to work in the creation of programs for others to understand and interpret. */}
                </p>
                <a href="/About" className="btn btn-primary">About</a>
                <br />
                <a href="/Portfolio" className="btn btn-primary">Portfolio</a>
                <br />
                <a href="/Blog" className="btn btn-primary">Blog</a>
                <br />
                <a href="/Contact" className="btn btn-primary">Contact</a>
                <br />
                <div className="social">
                <img alt="fb" id="fb" src= { fb } /><img alt="linkedIn" id="linkedIn" src= { linkedIn } /><img alt="gitHub" id="gitHub" src= { gitHub } />
                </div>
            </div>
        </div>
    )
}

export default MainCard;

