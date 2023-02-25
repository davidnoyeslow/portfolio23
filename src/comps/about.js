import React from "react";


const About = () => {

    return (
        <div className="about crt">
            <div className="about-backdrop"></div>
            
            <div className="about-one">
                <div className="headline">
                    <div className="js"></div>
                    <h2>Full Stack Development</h2>
                </div>
                <p>I am a Code Louisville Graduate certified as a Full Stack Developer.
               I currently have a passion for creating React.js based applications
               and have over 5 years of experience wirking with HTML, CSS, Node.js
               express, mongo DB and Firebase.
                </p>
            </div>
            <div className="about-two">
                <div className="headline">
                    <div className="react"></div>
                    <h2>Front End UX/UI</h2>
                </div>
                <p>I am commited to creating an aesthetic and user friendly UI/UX
                    as I believe navigating a site or app should be a jpyful and intuitive
                    experience.
                </p>
            </div>
            
        </div>
    )
}

export default About;