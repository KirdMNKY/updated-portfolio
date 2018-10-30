import React from "react";
import "./PortfolioCard.css";

import Carousel from "../Carousel/Carousel";
import ResumesCard from "../ResumesCard/ResumesCard";

const Cardbody = () =>

{
    return (

    <div className="portfolioCard">
        <div className="portfolioIntro">
            <h1>portfolio</h1>
            <h3>boot camp projects</h3>
        </div>
        <Carousel />
        <ResumesCard />
    </div>
    )
}
export default Cardbody;