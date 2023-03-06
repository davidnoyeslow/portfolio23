import React, {useState, useRef} from "react";

const Navbar = ({clicked, setClicked, homeActive, setHomeActive, aboutActive, setAboutActive}) => {
  
  const data1 = { 'data-before': 'ABOUT'};
  const data2 = { 'data-before' : 'PORTFOLIO'};
  
  const navToHome = (e) => {
    if( homeActive === false) {
      setAboutActive(false);
      setHomeActive(true);
      setClicked(false);
      
    }
  }

  const navToAbout = (e) => {
   if( aboutActive === false ) {
    setHomeActive(false);
    setAboutActive(true); 
    setClicked(false);
    }
  } 

    return (
      <div>
        <div id="navSection" className={clicked ? 'navSection menu-show' : 'navSection'}>
          {/* <div className="lines"></div> */}
          <div className='navElement1 nav-link' onClick={navToHome}><h1 className={clicked ? 'nav-link1 item-show' : 'nav-link1' } {...data1}>HOME</h1></div>
          <div className='navElement2 nav-link' onClick={navToAbout}><h1 className={clicked ? 'nav-link2 item-show' : 'nav-link2' } {...data1}>ABOUT</h1></div>
          <div className='navElement3 nav-link'><h1 className={clicked ? 'nav-link3 item-show' : 'nav-link3' } {...data2}>PORTFOLIO</h1></div>
        </div>
       </div>
        
    )
}

export default Navbar;