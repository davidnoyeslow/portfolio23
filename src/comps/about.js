import React, {useState} from "react";
import { motion, Variants } from "framer-motion";


const About = () => {
    const [openWebCard, setOpenWebCard] = useState(false);
    const [openUXCard, setOpenUXCard] = useState(false);
    const [openBackCard, setOpenBackCard] = useState(false);

    

    const variants = {
        offscreen: {
            opacity: 0
        },
        onscreen: {
            opacity: 1,
            transition: { staggerChildren: 0.5, staggerDirection: 1}
        }
      };

      const card = {
        offscreen: {
            opacity:0,
            y:-500
        },
        
        onscreen: {
            opacity: 1,
            y:0,
            transition: {
                type: "spring",
                damping: 20
            }
        }
    }


    return (
        <>
        <motion.div className="about-wrapper" >
            <div id="about" className="about">
                <h1>ABOUT ME</h1>
            {/* <div className="about-backdrop"></div> */}
                <div className="about-details">
                    
                    <div className="frontEnd-wrapper">
                        <p style={{display: "none"}} >Passionate about creating an aesthetic and user friendly UI/UX
                                that runs fast and efficient. Experienced in HTML, CSS, SASS, React and Next.js
                        </p>
                    </div>
                    
                </div>
            </div>
                <motion.ul className="card-wrapper" layout variants={variants} initial='offscreen' animate='onscreen'>
                    <motion.li className="about-card" 
                        layout variants={card}
                        data-openWebCard={openWebCard} 
                        style={{rotateY: -30}}
                        whileHover={{ rotateY: 0}}
                        onClick={() => setOpenWebCard(!openWebCard)}>
                        <h2 className="headline">Web App<br></br>Dev</h2>
                        <div className="details-wrapper">
                            <svg className="js" width="800px" height="800px" viewBox="-10 -5 1034 1034" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1">
                                    <path fill="#ffffff"
                                    d="M75 177v850h850v-850h-850zM722 562q39 0 66.5 15t46.5 49l-62 40q-10 -18 -22 -26t-29 -8t-27.5 9.5t-10.5 24.5q0 17 11 28q10 9 38 21l20 8q55 24 78 49q28 30 28 77q0 52 -38 82q-36 29 -95 29q-53 0 -91 -23q-35 -22 -54 -59l65 -37q14 23 31 35q20 13 48 13
                                    q24 0 39 -11t15 -29t-15 -30q-11 -8 -43 -22l-20 -9q-48 -20 -70 -45q-26 -29 -26 -75t32 -76t85 -30zM458 567h80v273q0 60 -34 91q-31 29 -86 29q-45 0 -77 -21q-27 -19 -43 -52l66 -39q11 21 20 29q12 12 31 12q21 0 31 -10q12 -12 12 -40v-272z" />
                            </svg>
                            <p>I am certified as a Full Stack Web Developer with over 5 
                                    years of experience creating applications. Familiar with
                                    both functional and object oriented programming in Javascript,
                                    and an ever expanding vocabulary of languages and frameworks.
                            </p>
                        </div>
                    </motion.li>
                    <motion.li className="about-card"  
                        layout variants={card}
                        data-openUXCard={openUXCard} 
                        style={{rotateY: -30}}
                        whileHover={{ rotateY: 0}}
                        onClick={() => setOpenUXCard(!openUXCard)}>
                        <h2 className="headline">Front End UX/UI</h2>
                    </motion.li>
                    <motion.li className="about-card" 
                        layout variants={card}
                        data-openBackCard={openBackCard} 
                        style={{rotateY: -30}}
                        whileHover={{ rotateY: 0}}
                        onClick={() => setOpenBackCard(!openBackCard)}>
                        <h2 className="headline">Back End<br></br>Dev</h2>
                    </motion.li>
                </motion.ul>
        </motion.div>
        </>
    )
}

export default About;