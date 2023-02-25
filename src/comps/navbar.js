import React, {useState} from "react";


const Navbar = ({clicked, setClicked, aboutActive, setAboutActive}) => {
  
  const data1 = { 'data-before': 'ABOUT'};
  const data2 = { 'data-before' : 'PORTFOLIO'};

  const clickHandler = (e) => {
   if( aboutActive === false ) {
    setAboutActive(true);
    setClicked(false);
   }
  } 

    return (
      <div>
        <div id="navSection" className={clicked ? 'navSection menu-show' : 'navSection'}>
          <div className="blur"></div>
          <div className='navElement1 nav-link' onClick={clickHandler}><h1 className={clicked ? 'nav-link1 item-show crt2' : 'nav-link1' } {...data1}>ABOUT</h1></div>
          <div className='navElement2 nav-link'><h1 className={clicked ? 'nav-link2 item-show' : 'nav-link2' } {...data2}>PORTFOLIO</h1></div>
          {/* <div className='navElement4'><span className="navOverlay"></span></div> */}
        </div>
        

        {/* <div className="navbar-wrapper">
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
            </nav> */}
        </div>
        
    )
}

export default Navbar;