import React, {useRef} from "react";
import { motion, Variants } from "framer-motion";


const About = () => {
    const scrollRef = useRef(null);

    const cardVariants = {
        offscreen: {
            translateX: "100%",
            rotateY: -90
        },
        onscreen: {
            translateX: "30%",
            rotateY: -30,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8,
                staggerChildren: 0.05, 
                delayChildren: 0.8
            } 
        }
    };

    const card = {

        offscreen: {
            translateY: "100%"
        },
         onscreen: {
            translateY: "0%"
         }
    }

    return (
        <>
        <motion.div className="about-wrapper" >
            <div id="about" className="about crt">
                <h1>ABOUT</h1>
            <div className="about-backdrop"></div>
            </div>
                <motion.ul className="card-wrapper" variants={cardVariants} initial="offscreen" animate="onscreen">
                    <motion.li className="about-one" variants={card}>
                        <div className="headline">
                            <div className="js"></div>
                            <h2>Full Stack Development</h2>
                        </div>
                        {/* <p>I am certified as a Full Stack Web Developer with over 5 
                            years of experience creating applications. Familiar with
                            both functional and object oriented programming in Javascript,
                            and an ever expanding vocabulary of languages and frameworks.
                        </p> */}
                    </motion.li>
                    <motion.li className="about-two" variants={card}>
                        <div className="headline">
                            <div className="react"></div>
                            <h2>Front End UX/UI</h2>
                        </div>
                        <p>Passionate about creating an aesthetic and user friendly UI/UX
                            that runs fast and efficient. Experienced in HTML, CSS, SASS, React and Next.js
                        </p>
                    </motion.li>
                </motion.ul>
                    
                
                
               
        </motion.div>
        
        
        </>
    )
}

export default About;