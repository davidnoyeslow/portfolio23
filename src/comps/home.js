import React from "react";
import Name from "./name";
import { motion } from 'framer-motion';
import '../css/home.scss';

const Home = () => {
  
  return (
      <div id="home">
            <motion.div className="home-container">
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