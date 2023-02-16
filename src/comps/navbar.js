import React, {useState} from "react";


const Navbar = ({aboutActive, setAboutActive}) => {
  
    return (
        <div className="navbar-wrapper">
            <div class="nav-button crt">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
            </div>
            <div class="logo">
               <h1 class="title crt" title="DAVID LOW">DAVID LOW</h1> 
            </div>
            <nav id="menu" class="menu sticky-mobile crt">
                <div class="nav-item"  title="ABOUT" onClick={(e) => aboutActive === false ? setAboutActive(true) : setAboutActive(false)}>
                  ABOUT
                </div>
                <div class="nav-item"  title="PORTFOLIO">
                    <a href="#portfolio">PORTFOLIO</a>
                  </div> 
                <div class="nav-item" title="CONTACT">
                  <a href="#contact" class="contact-button">CONTACT</a>
                </div>
            </nav>
        </div>
        
    )
}

export default Navbar;