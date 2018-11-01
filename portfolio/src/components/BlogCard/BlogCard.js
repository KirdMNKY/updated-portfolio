import React from "react";
import "./BlogCard.css";

import AFHCLogo from "../../assets/images/AFHCLogo.png";
import RDR2Banner from "../../assets/images/RDR2Logo.jpg";
import ReactLogo from "../../assets/images/untitled.png";


const Cardbody = () =>

{
    return (

    <div className="BlogCard">
        <div className="blogIntro">
            <h1 id="blogTitle">blog</h1>
        </div>
    
        {/* // Austin Facial Hair Club Blog */}
        <div className="blogContent">
            
                <img src={ AFHCLogo } alt="Austin Facial Hair Club Logo" className="blogPic" />
            </div>
            
            <h2 id="blogH1">austin facial hair club</h2>
            <p className="blogP">
                I am currently pursing membership with the Austin Facial Hair Club as a part of my social life here in Austin. I am in the process of growing out my beard for a competition in the Spring. Having a group of like minded people (yes, women, too) will help with the struggles of managing the emotional and physical growth.
            </p>
            <p className="blogP">
                I am hoping that this opportunity to socialize and help the community will allow me to grow as and individual and contribute to my new home! I am a new member to the community and would like to help Austin thrive in any way I can.
            </p>
            {/* // End of Blog Section */}
            <hr className="blogHR" />
        
        

        {/* // Red Dead Redemption Blog */}
        <div className="blogContent">
            
                <img src={ RDR2Banner } alt="Red Dead Redemption 2 Banner" className="blogPic" />
            </div>
            <h2 id="blogH1">red dead redemption</h2>
            <p className="blogP">
                Aside from my love of coding, gaming has been a long time hobby of mine. I especially gravitate towards games with a compeling story and lots of room to build my character's personality and skills.
            </p>
            <p className="blogP">
                I have been a fan of the Red Dead series since Red Dead Revolver on the original Xbox. The story of the Marstons has had ups and downs and zombies! Who doesn't love a good zombie attack? The most recent installment is a prequel so we get to learn more about the gang that John Marston has been involed with and what their real goal was after all. I have only just entered this Wild West story, but have felt the immersion that the developers over at RockStar have worked so hard to perfect. And that they have!
            </p>

            {/* // End of Blog Section */}
            <hr className="blogHR" />
       
        
        {/* // React vs Angular Blog */}
        <div className="blogContent">
            
                <img src={ ReactLogo } alt="React Logo" className="blogPic" />
            </div>
            <h2 id="blogH1">react vs angular</h2>
            <p className="blogP">
                React is a quite intutitive framework for web development. I am only beginning to full understand the nuiances of the framework. But as a future web developer I will need to be able to learn new frameworks as they become more popular. Trying to stay ahead of the curve will be a challenge, but I am up to the task.
            </p>
            <p className="blogP">
                Angular has been rising as a true competitor for React. I have just started to crack open the documentation for it and am beginning my first Angular web app. I will have more about the experience in the near future.
            </p>
            {/* // End of Blog Section */}
            <hr className="blogHR" />
        
        

    </div>
    )
}
export default Cardbody;