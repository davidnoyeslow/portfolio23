import React, {useState} from "react";
import {motion} from "framer-motion";

const Portfolio = ({ lastBackGrnd }) => {
    const [hideElement, setHideElement ] = useState(false);
    const [state, setState] = useState({
        openTWCard: false,
        openWHCard: false,
        openAWCard: false
    });

    const renderBackDrop = (arg1) => {
        switch(true) {
            case (arg1 === 1): 
                return <>
                    <div className="backdrop-2a"></div> 
                    <div id="about" className="backdrop-2b"></div>
                </>
            case (arg1 === 2 ):
                return <>
                    <div className="backdrop-3a"></div> 
                    <div id="about" className="backdrop-3b"></div>
                </>
            case (arg1 === 3):
                return <>
                    <div className="backdrop-2a reverse-animation"></div> 
                    <div id="about" className="backdrop-2b reverse-animation2"></div>
                </>            
        }
    }

    return (

        <div>
            <div className="portfolio-wrapper">
                {renderBackDrop(lastBackGrnd)}
                <div className="overlay2" style={{backgroundSize:"6px", opacity: 0.9}}></div>
                <div className="portfolio-list">
                    <div className="portfolio-item"
                        data-opentwcard={state.openTWCard}
                        onClick={()=> setState({...state, openTWCard: state.openTWCard ? false : true, openAWCard: false, openWHCard: false})}>
                        <span className="project-name">TREEWOMAN</span>    
                        <img className="project-img" src={require('../img/treewoman.jpg')} alt="treewoman-thumbnail" />
                        <div className="project-description">
                            <h1>TREEWOMAN</h1>
                            <ul className="project-links">
                                <li style={{display:"inline"}}>Github</li>
                                <li style={{display:"inline"}}><a>URL</a></li>
                            </ul>
                            <p>
                                Treewoman is a photo based memorial website where individuals can upload photo
                                memories as well as comment on photos added by others. This project was my first complex React
                                application. What started as a simple concept grew in complexity as the need for security 
                                and user authentication became neccessary. I utilized Firebase and Google Cloud to bootstrap the 
                                back end and maintain the user database.
                            </p>
                        </div>
                    </div>
                    <div className="portfolio-item"
                        data-openwhcard={state.openWHCard}
                        onClick={()=> setState({...state, openWHCard: state.openWHCard ? false : true, openTWCard: false, openAWCard: false})}>
                        <div className="project-name">
                            <img className="project-preview" src={require('../img/herzog_site.jpg')} alt="herzog-preview"></img>
                            <span>HERZOG QUOTES</span>
                        </div>    
                    </div>
                    <div className="portfolio-item"
                        data-openawcard={state.openAWCard}
                        onClick={()=> setState({...state, openAWCard: state.openAWCard ? false : true, openTWCard: false, openWHCard: false})}>
                        <div className="project-name">
                            <img className="project-preview" src={require('../img/alan_site.jpg')} alt="aw-preview"></img>
                            <span>ALAN WATTS TRIBUTE</span>
                        </div>
                        
                    </div>
                </div>
                
            </div>
            
        </div>
    );
}

export default Portfolio;