import React, {useState, useRef} from "react";
import { motion } from "framer-motion";

const Navbar = ({ clicked, setClicked, homeActive, setHomeActive, aboutActive, setAboutActive, portfolioActive, setPortfolioActive }) => {
  
  const data1 = { 'data-before': 'ABOUT'};
  const data2 = { 'data-before' : 'PORTFOLIO'};
  
  
  const navToHome = (e) => {
    if( homeActive === false) {
      setAboutActive(false);
      setPortfolioActive(false);
      setHomeActive(true);
      setClicked(false);
    }
  }

  const navToAbout = (e) => {
   if( aboutActive === false ) {
    setHomeActive(false);
    setPortfolioActive(false);
    setAboutActive(true); 
    setClicked(false);
    }
  }
  
  const navToPortfolio = (e) => {
    if( portfolioActive === false ) {
      setHomeActive(false);
      setPortfolioActive(true);
      setAboutActive(false); 
      setClicked(false);
    }
  }

    return (
      <div>
        <ul id="navSection" className={clicked ? 'navSection menu-show crt' : 'navSection crt'}>
          <div className="blur"></div>
          <div className="grain2"></div>
          <li className='navElement1 nav-link' onClick={navToHome}><h1 className={clicked ? 'nav-link1 item-show' : 'nav-link1' } {...data1}>HOME</h1></li>
          <li className='navElement2 nav-link' onClick={navToAbout}><h1 className={clicked ? 'nav-link2 item-show' : 'nav-link2' } {...data1}>ABOUT</h1></li>
          <li className='navElement3 nav-link' onClick={navToPortfolio}><h1 className={clicked ? 'nav-link3 item-show' : 'nav-link3' } {...data2}>PORTFOLIO</h1></li>
        </ul>
       </div>
        
    )
}

export default Navbar;