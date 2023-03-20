import React, {useState} from "react";

const Portfolio = () => {
    const [hideElement, setHideElement ] = useState(false);

    return (

        <div>
            <div className="project-wrapper">
                <div className="portfolioSection">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className={ hideElement ? "portfolioSection collapsed" : "portfolioSection"}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="portfolioSection">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <button onClick={() => hideElement ? setHideElement(false) : setHideElement(true)}>CLICK ME!</button>
            </div>
            
        </div>
    );
}

export default Portfolio;