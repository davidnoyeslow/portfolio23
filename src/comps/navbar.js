import React, {useEffect,useState, useRef} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import '../css/navbar.scss';

const Navbar = ({ clicked, setClicked }) => {
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight
  });

  const [state, setState] = useState({
    homeActive: false,
    aboutActive: false,
    portfolioActive: false
  })



  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight
    })
  }

  useEffect(() => {
    window.addEventListener('resize', setDimension);
    console.log(screenSize.dynamicWidth);
    if (screenSize.dynamicWidth > 760) {
      setClicked(true);
    } else {
      setClicked(false);
    }
    return(() => {
        window.removeEventListener('resize', setDimension);
    })
  }, [screenSize])
 
  const closeMenu = (e) => {
    if( clicked && screenSize.dynamicWidth < 760) {
      setClicked(false);
    } else {
      setClicked(true);
    } 
  }

  
  return (
    <AnimatePresence initial={false}>
        { clicked && (<motion.div key="one">
          <motion.ul id="navSection" className="navSection"
            key="two"
            initial={{ y: "100%" }}
            animate={{ y: 0, transition: { duration: .4, ease: "easeInOut" } }}
            exit={{ y: "-100%", transition: { duration: .4, ease: "easeInOut" } }}>
            <div className="blur"></div>
            <Link to="home" spy={true} smooth={true} 
              onClick={() => {
                setState({
                ...state, 
                homeActive: state.homeActive ? false : true,
                aboutActive: false,
                portfolioActive: false
                }); 
                closeMenu();
              }}>
              <motion.li className='navElement1 nav-link' key="three" 
                data-homeActive={state.homeActive}
                initial={{y: "80px"}}
                animate={{y: 0}}
                transition={{duration: .3, delay: .2, type: "spring", stiffness: 100}}>
                <h1>HOME</h1>
              </motion.li>
            </Link>
            <Link to="about" spy={true} smooth={true} 
              onClick={() => {
                setState({
                ...state, 
                aboutActive: state.aboutActive ? false : true,
                homeActive: false, 
                portfolioActive: false
                });
                closeMenu();
              }}>
              <motion.li className='navElement2 nav-link' key="four" 
              data-aboutActive={state.aboutActive}
              initial={{y: "80px"}}
              animate={{y: 0}}
              transition={{duration: .3, delay: .3, type: "spring", stiffness: 100}}>
                <h1>SKILLS</h1>
              </motion.li>
            </Link>
            <Link to="portfolio" spy={true} smooth={true} 
              onClick={() => {
                setState({
                ...state, 
                portfolioActive: state.portfolioActive ? false : true,
                homeActive: false, aboutActive: false
                });
                closeMenu();
              }}>
              <motion.li className='navElement3 nav-link'  key="five" 
              data-portfolioActive={state.portfolioActive}
              initial={{y: "80px"}}
              animate={{y: 0}}
              transition={{duration: .3, delay: .4, type: "spring", stiffness: 100}}>
                <h1>WORK</h1>
              </motion.li>
            </Link>
          </motion.ul>
        </motion.div>)}
      </AnimatePresence>
    )
}

export default Navbar;