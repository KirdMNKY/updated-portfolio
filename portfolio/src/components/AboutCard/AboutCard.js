import React from "react";
import "./AboutCard.css";

import ResumesCard from "../ResumesCard/ResumesCard";

import SkillJS from "../../assets/images/JSLogo.png";
import SkillJava from "../../assets/images/javaLogo.png";
import SkillHTML5 from "../../assets/images/html5Logo.png";
import SkillCSS3 from "../../assets/images/css3Logo.jpg";
import SkillExpress from "../../assets/images/expressJSLogo.png";
import SkillMySQL from "../../assets/images/mySQLLogo.png";
import SkillNodeJS from "../../assets/images/nodeJSLogo.jpg";
import SkillMongoDB from "../../assets/images/mongoDBLogo.jpg";
import NEISD from "../../assets/images/NEISDLogo.gif";
import UISD from "../../assets/images/UISDLogo.jpg";
import UTatA from "../../assets/images/UTatALogo.png";
import TAMIU from "../../assets/images/TAMIULogo.png";


const Cardbody = () =>

{
    return (

    <div className="aboutCard">
        <p className="aboutCardP">
        <h1>about me</h1>
        I have had a career in education for thirteen years, and as much as I loved being involved with helping kids grow in their knowledge of not only business and technology education, but also of the world, I need a change. I have been coding casually for about twenty years, and had been teaching coding for about ten of those years.
        </p>
        <p className="aboutCardP">
        I have always dabbled in creating sprites, coding games, teaching application and web development, and, at this point in my life, I feel I am ready to code full-time. I want to create for more than just my own amusement. I want to develop websites, applications, programs, etc. for others to make use of and enjoy!
        </p>
        <p className="aboutCardP">
        As an educator, more specifically a Computer Science educator, I have honed my debugging skills and developed a new way of looking at and percieving a bit of code's purposes. In that knowledge I am able to refine the code to make it more efficient and streamlined.
        </p>
        <p className="aboutCardP">
        I have always felt that I could "see" the underlying code for any program or application I am using. I have that grasp and understanding of how, what, where, when, and why the code does what it does. I wish to put this skill to work in the creation of programs for others to understand and interpret.
        </p>

                <h1>software proficiency</h1>
        <div className="SkillsLeft">
            {/* JavaScript Skill Bar */}
            <p className="aboutCardP">
            <img src={ SkillJS } alt="JavaScript" id="SkillJSimg" />
            <div className="progress">
                <div className="progress-bar" role="progressbar" id="SkillJavaBar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <br /><br /><br />
            </p>

            {/* HTML5 Skill Bar */}
            <p className="aboutCardP">
            <img src={ SkillHTML5 } alt="HTML5" id="SkillHTMLimg" />
            <div className="progress">
                <div className="progress-bar" role="progressbar" id="SkillHTMLBar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <br /><br /><br />
            </p>
            
            {/* CSS3 Skill Bar */}
            <p className="aboutCardP">
            <img src={ SkillCSS3 } alt="CSS3" id="SkillCSSimg" />
            <div className="progress">
                <div className="progress-bar" role="progressbar" id="SkillCSSBar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <br /><br /><br />
            </p>

            {/* NodeJS Skill Bar */}
            <p className="aboutCardP">
            <img src={ SkillNodeJS } alt="NodeJS" id="SkillNodeJSimg" />
            <div className="progress">
                <div className="progress-bar" role="progressbar" id="SkillNodeJSBar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <br /><br /><br />
            </p>
        </div> {/* End of Skills Left */}


         <div className="SkillsRight clearfix">
            {/* Java Skill Bar */}
            <p className="aboutCardP">
            <img src={ SkillJava } alt="Java" id="SkillJavaimg" />
            <div className="progress">
                <div className="progress-bar" role="progressbar" id="SkillJavaBar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <br /><br /><br />
            </p>

            {/* Express Skill Bar */}
            <p className="aboutCardP">
            <img src={ SkillExpress } alt="Express" id="SkillExpressimg" />
            <div className="progress">
                <div className="progress-bar" role="progressbar" id="SkillExpressBar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <br /><br /><br />
            </p>

            {/* mongoDB Skill Bar */}
            <p className="aboutCardP">
            <img src={ SkillMongoDB } alt="MongoDB" id="SkillMongoDBimg" />
            <div className="progress">
                <div className="progress-bar" role="progressbar" id="SkillMongoDBBar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <br /><br /><br />
            </p>

            {/* MySQL Skill Bar */}
            <p className="aboutCardP">
            <img src={ SkillMySQL } alt="MySQL" id="SkillMySQLimg" />
            <div className="progress">
                <div className="progress-bar" role="progressbar" id="SkillMySQLBar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <br /><br /><br />
            </p>

         </div> {/* End of Skills Right */}

        <h1>experience</h1>
        <div className="experienceCard">
            <p className="aboutCardP">
            <img src={ NEISD } alt="NEISD" id="NEISD" />
            North East Independent School District<br />
            San Antonio, TX<br />
            Animation and Computer Science Teacher<br />
            </p>

            <hr className="aboutHR" />

            <p className="aboutCardP">
            <img src={ UISD } alt="UISD" id="UISD" />
            United Independent School District<br />
            Laredo, TX<br />
            Business Education and Computer Science Teacher<br />
            </p>

            <div className="tabYearJob1">
            2015 <div className="vr"></div> 2018
            </div>
            <div className="tabYearJob2">
            2005 <div className="vr"></div> 2015
            </div>
        </div>

        <h1>education</h1>
        <div className="educationCard">
            <p className="aboutCardP">
            <img src={ UTatA } alt="UTatA" id="UTatA" />
            University of Texas<br />
            Austin, TX<br />
            Full Stack Web Developer Coding Boot Camp<br />
            </p>
            <hr className="aboutHR" />
            <p className="aboutCardP">
            <img src={ TAMIU } alt="TAMIU" id="TAMIU" />
            Texas A&M International University<br />
            Laredo, TX<br />
            BBA Management Information Systems<br />
            </p>
            <div className="tabYear1">
            2018
            </div>
            <div className="tabYear2">
            2004
            </div>
        </div>
        
        <h1>skills</h1>
        <div className="SkillsLeft">
            <p className="aboutCardP">
                <li className="skillsList">
                    Leader
                </li>
                <li className="skillsList">
                    Innovative
                </li>
                <li className="skillsList">
                    Creative
                </li>
                <li className="skillsList">
                    Team Player
                </li>
                <li className="skillsList">
                    Problem Solver
                </li>
            </p>
        </div> {/* End of Skills Left */}
       
        <div className="SkillsLeft">
            <p className="aboutCardP">
                <li className="skillsList">
                    Bilingual
                </li>
                <li className="skillsList">
                    Patient
                </li>
                <li className="skillsList">
                    Hardworking
                </li>
                <li className="skillsList">
                    Determined
                </li>
                <li className="skillsList">
                    Adaptive
                </li>
               
            </p>
        </div>

        <ResumesCard />
        

    </div>
    )
}
export default Cardbody;