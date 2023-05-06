import React, {useState, useRef} from "react";


const Navbar = ({ clicked, setClicked, currentBackGrnd, setCurrentBackGrnd, lastBackGrnd, setLastBackGrnd, homeActive, setHomeActive, aboutActive, setAboutActive, portfolioActive, setPortfolioActive }) => {
  
  function backgroundCheck () {
    if(currentBackGrnd === 1 || currentBackGrnd === 3) {
      setLastBackGrnd(currentBackGrnd);
      setCurrentBackGrnd(2);
    } else {
      setLastBackGrnd(currentBackGrnd);
      setCurrentBackGrnd(3);
    }
  }
  
  const navToHome = (e) => {
    setCurrentBackGrnd(1);
    if( !homeActive ) {
      setAboutActive(false);
      setPortfolioActive(false);
      setHomeActive(true);
      setClicked(false);
    }
  }

  const navToAbout = (e) => {
    if( aboutActive) {
      setClicked(false);
    } else {
        setHomeActive(false);
        setPortfolioActive(false);
        setAboutActive(true); 
        setClicked(false);
        backgroundCheck();
    }
  }
  
  const navToPortfolio = (e) => {
    if ( portfolioActive ) {
      setClicked(false);
    } else {
      setHomeActive(false);
      setPortfolioActive(true);
      setAboutActive(false); 
      setClicked(false);
      backgroundCheck();
    }
  }

    return (
      <div>
        <ul id="navSection" className={clicked ? 'navSection menu-show crt' : 'navSection crt'}>
          <div className="blur"></div>
          <li className='navElement1 nav-link' onClick={navToHome}><h1 className={clicked ? 'nav-link1 item-show' : 'nav-link1' } data-label="HOME">HOME</h1></li>
          <li className='navElement2 nav-link' onClick={navToAbout}><h1 className={clicked ? 'nav-link2 item-show' : 'nav-link2' } data-label="ABOUT">ABOUT</h1></li>
          <li className='navElement3 nav-link' onClick={navToPortfolio}><h1 className={clicked ? 'nav-link3 item-show' : 'nav-link3' } data-label="PORTFOLIO">PORTFOLIO</h1></li>
        </ul>
       </div>
        
    )
}

export default Navbar;