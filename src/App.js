import React, {useState, useCallback, useEffect, useRef} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './comps/home';
import MenuButton from './comps/menuButton';
import Navbar from './comps/navbar';
import About from './comps/about';
import Portfolio from './comps/portfolio';
import './css/style.css';



function App() {
  const [ homeActive, setHomeActive ] = useState(true);
  const [ aboutActive, setAboutActive ] = useState(false);
  const [ portfolioActive, setPortfolioActive ] = useState(false);
  const [ clicked, setClicked ] = useState(false);
  
  return (
    <div className="App">
      <AnimatePresence>
      { homeActive && 
      <motion.div
        exit={{ rotateY: 40}}
        transition={{
          ease: "easeOut",
          duration: 1,

        }} 
      >
        <Home aboutActive={aboutActive}/>
      </motion.div> }
      </AnimatePresence>
      <MenuButton clicked={clicked} setClicked={setClicked}/>  
      <Navbar clicked={clicked} setClicked={setClicked} 
      homeActive={homeActive} setHomeActive={setHomeActive} 
      aboutActive={aboutActive} setAboutActive={setAboutActive}
      portfolioActive={portfolioActive} setPortfolioActive={setPortfolioActive}/>
      { aboutActive && <About/> }
      { portfolioActive && <Portfolio/> }
    </div>
  );
}

export default App;
