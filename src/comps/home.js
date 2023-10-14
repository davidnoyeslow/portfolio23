import React, {useEffect, useState} from "react";
import Logo from './logo-svg';
import Name from "./name";
import Coil from './coil-logo';
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
            <div className="coil"></div>
            <div className="body"></div>
            <div className="sillouette"></div>
            
           
          </motion.div>
        </Div100vh>       
      </div>
        
        
    )
}

export default Home;