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
            <div className="section-wrapper">
                {renderBackDrop(lastBackGrnd)}
                <div className="overlay2" style={{backgroundSize:"6px", opacity: 0.9}}></div>
                <ul className="portfolio-list">
                    <li className="portfolio-item"
                        data-opentwcard={state.openTWCard}
                        onClick={()=> setState({...state, openTWCard: state.openTWCard ? false : true, openAWCard: false, openWHCard: false})}>
                        <div className="project-name">
                            <img className="project-preview" src={require('../img/treewoman.jpg')} alt="tw-preview"></img>
                            <span>TREEWOMAN</span>
                        </div>    
                        
                        <div className="project-details">
                            <img className="project-img" src={require('../img/treewoman.jpg')} alt="treewoman-thumbnail" />
                            <ul className="project-links">
                                <li style={{display:"inline"}}>Github</li>
                                <li style={{display:"inline"}}><a>URL</a></li>
                            </ul>
                            <div className="project-description">
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Vivamus eget condimentum turpis, non gravida orci. 
                                Duis blandit, nisi quis congue consequat, augue ipsum tempor odio, non eleifend tortor nulla in purus. Donec tempor ex vel ipsum mollis aliquet. 
                                Etiam mollis ac ligula non lacinia. Nullam id nisl nunc. Donec tortor leo, vulputate vitae tristique eget, suscipit in ligula. 
                                Sed ultricies elit nisi. Quisque pretium rhoncus tortor varius euismod. Vivamus massa erat, cursus sit amet ipsum vitae, elementum ullamcorper nisl.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="portfolio-item"
                        data-openwhcard={state.openWHCard}
                        onClick={()=> setState({...state, openWHCard: state.openWHCard ? false : true, openTWCard: false, openAWCard: false})}>
                        <div className="project-name">
                            <img className="project-preview" src={require('../img/herzog_site.jpg')} alt="herzog-preview"></img>
                            <span>HERZOG QUOTES</span>
                        </div>    
                    </li>
                    <li className="portfolio-item"
                        data-openawcard={state.openAWCard}
                        onClick={()=> setState({...state, openAWCard: state.openAWCard ? false : true, openTWCard: false, openWHCard: false})}>
                        <div className="project-name">
                            <img className="project-preview" src={require('../img/alan_site.jpg')} alt="aw-preview"></img>
                            <span>ALAN WATTS TRIBUTE</span>
                        </div>
                        
                    </li>
                </ul>
                
            </div>
            
        </div>
    );
}

export default Portfolio;