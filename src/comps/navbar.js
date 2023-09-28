import React, {useState, useRef} from "react";
import { motion, AnimatePresence } from "framer-motion";
import '../css/navbar.scss';

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

  const variants = {
    offscreen: {
        opacity: 0
    },
    onscreen: {
        opacity: 1,
        transition: {
            duration: 1,
                staggerChildren: 1,
                staggerDirection: -1
        }
        
    }
  };

  const link = {
    offscreen: {
        opacity: 0
    },
    
    onscreen: {
        opacity: 0,
        transition: {
            duration:1,
            delay: 2,
            ease: "easeIn"
        }
    }
}
    return (
      <AnimatePresence>
      { clicked && (<motion.div>
          <motion.ul id="navSection" className="navSection"
            key="one"
            initial={{ y: "100%" }}
            animate={{ y: 0, transition: { duration: .4, ease: "easeInOut" } }}
            exit={{ y: "-100%", transition: { duration: .4, ease: "easeInOut" } }}
          >
            <div className="blur"></div>
            <motion.li className='navElement1 nav-link' onClick={navToHome} key="two" 
            initial={{y: "80px"}}
            animate={{y: 0}}
            transition={{duration: .3, delay: .2, type: "spring", stiffness: 100}}>
              <h1 className={clicked ? 'nav-link1 item-show' : 'nav-link1' } data-label="HOME">
                HOME</h1></motion.li>
            <motion.li className='navElement2 nav-link' onClick={navToAbout} key="three" 
            initial={{y: "80px"}}
            animate={{y: 0}}
            transition={{duration: .3, delay: .3, type: "spring", stiffness: 100}}>
              <h1 className={clicked ? 'nav-link2 item-show' : 'nav-link2' } data-label="ABOUT">ABOUT</h1></motion.li>
            <motion.li className='navElement3 nav-link' onClick={navToPortfolio} key="four" 
            initial={{y: "80px"}}
            animate={{y: 0}}
            transition={{duration: .3, delay: .4, type: "spring", stiffness: 100}}>
              <h1 className={clicked ? 'nav-link3 item-show' : 'nav-link3' } data-label="PORTFOLIO">PORTFOLIO</h1></motion.li>
          </motion.ul>
        </motion.div>)}
        </AnimatePresence>
    )
}

export default Navbar;