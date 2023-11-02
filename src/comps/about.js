import React, {useState, useEffect, useRef} from "react";
import { motion, useInView } from "framer-motion";
import NodeSVG from './node-svg';
import ReactSVG from "./reactSVG";
import JsSVG from "./jsSVG";
import '../css/about.scss';
import '../css/backdrops.scss';

const About = () => {
    const [ openWebCard, setOpenWebCard ] = useState(false);
    const [ openUXCard, setOpenUXCard ] = useState(false);
    const [ openBackCard, setOpenBackCard ] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref);
    

    useEffect(() => {
        if(isInView.inView) {
            setOpenWebCard(true);
            setOpenUXCard(true);
            setOpenBackCard(true);
        } 
        
    }, [isInView.inView]);

    useEffect(() => {
        console.log("Element is in view: ", isInView)
      }, [isInView])

   

      
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

      const card = {
        offscreen: {
            opacity: 0
        },
        
        onscreen: {
            opacity: 1,
            transition: {
                duration:1,
                delay: 2,
                ease: "easeIn"
            }
        }
    }

    return (
        <>
            <div ref={ref}>
                {isInView ? (<motion.div id="about" className="section-wrapper" >
                <h1 className="section-header">SKILLS</h1>
                <motion.ul className="card-wrapper" initial='offscreen' variants={variants} animate='onscreen'>
                <motion.li className="about-card"  
                        variants={card}
                        data-openuxcard={openUXCard}>
                        <div className="headline-wrapper">
                        <ReactSVG />
                        <h2 className="headline">Front End<br></br>UX/UI</h2>
                        </div>
                        <div className="details-wrapper">
                            <p className="details">Passionate about creating an aesthetic and user friendly UI/UX
                                that runs fast and efficient. Experienced in HTML, CSS, SASS, React and Next.js
                            </p>
                        </div>
                    </motion.li>
                    <motion.li className="about-card" 
                        variants={card}
                        data-openwebcard={openWebCard}>
                        <div className="headline-wrapper">
                            <JsSVG />
                            <h2 className="headline">Web App<br></br>Dev</h2>
                        </div>
                        <div className="details-wrapper">
                            <p className="details">I am certified as a Full Stack Web Developer with over 5 
                                    years of experience creating applications. Familiar with
                                    both functional and object oriented programming in Javascript,
                                    and an ever expanding vocabulary of languages and frameworks.
                            </p>
                        </div>
                    </motion.li>
                    <motion.li className="about-card" 
                        variants={card}
                        data-openbackcard={openBackCard}>
                        <div className="headline-wrapper">
                            <NodeSVG />
                            <h2 className="headline">Back End<br></br>Dev</h2>
                        </div>
                        
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