import React from "react";
import "./ResumesCard.css";        
        
import resume1 from "../../assets/images/resume1.png";
import resume2 from "../../assets/images/resume2.png";

import resume1pdf from "../../assets/files/MSoto_Resume_2018.pdf";
import resume2pdf from "../../assets/files/MSotoCodingResume2018.pdf";

const Cardbody = () =>

{
    return (
        <div className="ResumesCard">
            <h1>resume</h1>
            <div className="resumes">
                <a href={ resume1pdf } target="_blank"><img src={ resume1 } alt="resume1" id="resume1" /></a>
                <a href={ resume2pdf } target="_blank"><img src={ resume2 } alt="resume2" id="resume2" /></a>
            </div>
        
            <hr className="aboutHREnd" />  
        </div>
         

    );
}

export default Cardbody;