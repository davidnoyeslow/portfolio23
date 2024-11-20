import React, {useRef} from "react";
import { motion, useInView } from "framer-motion";
import NodeSVG from './node-svg';
import ReactSVG from "./reactSVG";
import JsSVG from "./jsSVG";
import Line from "./line";
import aboutLineSVG from "./aboutlineSVG";
import '../css/about.scss';
import '../css/backdrops.scss';

const About = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    

    const variants = {
        offscreen: {
            opacity: 0,
        },
        onscreen: {
            opacity: 1,
            
            transition: {
                duration: .7,
                delay: .4,
                    staggerChildren: 1,
                    staggerDirection: -1
            }
            
        }
      };

      const card = {
        offscreen: {
            opacity: 0
        },
        
        onscreen: {
            opacity: 1,
            transition: {
                duration:.5,
                delay: 0,
                ease: "easeIn"
            }
        }
    }

    return (
        <>
            <div id="about"  ref={ref} style={{marginTop:"20px"}}>
                {isInView ? (<motion.div className="section-wrapper" >
                <h1 className="section-header">SKILLS</h1>
                <div className="backdrop-2a"></div>
                <motion.ul className="card-wrapper" initial='offscreen' variants={variants} animate='onscreen'>
                    
                    <motion.li className="about-card"  
                        variants={card}>
                        <ReactSVG />
                        <Line />
                        <div className="details-wrapper">
                            <p className="details">Passionate about creating an aesthetic and user friendly UI/UX
                                that runs fast and efficient. Experienced in HTML, CSS, SASS, React and Next.js
                            </p>
                        </div>
                    </motion.li>
                    <motion.li className="about-card" 
                        variants={card}>
                        <JsSVG />
                        <div className="details-wrapper">
                        
                            <p className="details">I am certified as a Full Stack Web Developer with over 5 
                                    years of experience creating applications. Familiar with
                                    both functional and object oriented programming in Javascript,
                                    and an ever expanding vocabulary of languages and frameworks.
                            </p>
                        </div>
                    </motion.li>
                    <motion.li className="about-card" 
                        variants={card}>
                        <NodeSVG />
                        <div className="details-wrapper">
                        
                            <p className="details">Experienced with creating APIs and maintaining 
                                application databases with Express, MongoDB and Firebase.
                            </p>
                        </div>
                    </motion.li>
                </motion.ul>
            </motion.div>)
            : (
                <div></div>
            )}
            </div>
         </>
    )
}

export default About;