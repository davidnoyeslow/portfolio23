import React, {useEffect, useState} from "react";
import Logo from './logo-svg';
import Name from "./name";
import Coil from './coil-logo';
import { motion, useAnimationControls } from 'framer-motion';
import Div100vh from "react-div-100vh";
import '../css/home.scss';

const Home = () => {
  const [glitch, setGlitch] = useState(false);
  const grain = useAnimationControls();

  // useEffect(() => {
  //   grain.start({
  //     x: [-.2, -.4, .20, .4],
  //     y: [0.9, -.3, -.8, .8],
  //     opacity: [1, 1, 0.8, 0.8],
  //     transition: {
  //       duration: 1,
  //       repeat: Infinity,
  //       repeatType:"mirror"
  //     } 
  //   });
  // }, []);

  

  const slide = {
        type: "spring",
        stiffness: 700,
        damping: 30
      }
    

    return (
      <div>
        <Div100vh>
          <motion.div id="home" className="home-container">
            <motion.div 
              className='overlay2'
              key="overlay"
              >
            </motion.div>
            <div className="logo-container">
              <Name />
            </div>
            <div className="body"></div>
            <div className="sillouette"></div>
            {/* <div className="coil"></div> */}
           
          </motion.div>
        </Div100vh>       
      </div>
        
        
    )
}

export default Home;