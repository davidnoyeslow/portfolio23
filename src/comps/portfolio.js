import React, {useState} from "react";


const Portfolio = () => {
    const [hideElement, setHideElement ] = useState(false);

    return (

        <div>
            <div className="project-wrapper">
                <div className="project">
                    <img className="project-img" src={require('../img/treewoman.jpg')} alt="treewoman-thumbnail" />
                    <div className="project-details">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Vivamus eget condimentum turpis, non gravida orci. 
                        Duis blandit, nisi quis congue consequat, augue ipsum tempor odio, non eleifend tortor nulla in purus. Donec tempor ex vel ipsum mollis aliquet. 
                        Etiam mollis ac ligula non lacinia. Nullam id nisl nunc. Donec tortor leo, vulputate vitae tristique eget, suscipit in ligula. 
                        Sed ultricies elit nisi. Quisque pretium rhoncus tortor varius euismod. Vivamus massa erat, cursus sit amet ipsum vitae, elementum ullamcorper nisl.
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Portfolio;