import React, {useEffect, useState} from "react";
import { Element } from "react-scroll";
import Name from "./name";
import { motion, useAnimationControls } from 'framer-motion';
import Div100vh from "react-div-100vh";
import '../css/home.scss';

const Home = () => {
  
  const slide = {
        type: "spring",
        stiffness: 700,
        damping: 30
      }
    
  return (
      <div id="home">
            <motion.div className="home-container">
              {/* <motion.div 
                className='overlay2'
                key="overlay"
                >
              </motion.div> */}
              <div className="logo-container">
                <Name />
              </div>
              <div className="coil"></div>
              <div className="body"></div>
              <div className="sillouette"></div>
              
            
            </motion.div>      
      </div>
        
        
    )
}

export default Home;