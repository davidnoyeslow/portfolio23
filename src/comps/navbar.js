import React, {useState, useRef} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
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
        <motion.div>
          <motion.ul id="navSection" className={"navSection " + (clicked ? 'mobileShow' : '')}
            key="one"
            // initial={{ y: "100%" }}
            // animate={{ y: 0, transition: { duration: .4, ease: "easeInOut" } }}
          
          >
            <div className="blur"></div>
            <motion.li className='navElement1 nav-link' onClick={navToHome} key="two" 
            initial={{y: "80px"}}
            animate={{y: 0}}
            transition={{duration: .3, delay: .2, type: "spring", stiffness: 100}}>
              <Link to="home" spy={true} smooth={true} className={clicked ? 'nav-link1 item-show' : 'nav-link1' } data-label="HOME">
                <h1>HOME</h1>
              </Link>
              </motion.li>
            <motion.li className='navElement2 nav-link' onClick={navToAbout} key="three" 
            initial={{y: "80px"}}
            animate={{y: 0}}
            transition={{duration: .3, delay: .3, type: "spring", stiffness: 100}}>
              <Link to="about" spy={true} smooth={true}  className={clicked ? 'nav-link2 item-show' : 'nav-link2' } data-label="ABOUT"><h1>SKILLS</h1></Link></motion.li>
            <motion.li className='navElement3 nav-link' onClick={navToPortfolio} key="four" 
            initial={{y: "80px"}}
            animate={{y: 0}}
            transition={{duration: .3, delay: .4, type: "spring", stiffness: 100}}>
              <Link to="portfolio" spy={true} smooth={true}  className={clicked ? 'nav-link3 item-show' : 'nav-link3' } data-label="PORTFOLIO"><h1>WORK</h1></Link></motion.li>
          </motion.ul>
        </motion.div>
        </AnimatePresence>
    )
}

export default Navbar;