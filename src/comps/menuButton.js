import React, {useState} from "react";
import { motion } from "framer-motion";

const MenuButton = ({ clicked, setClicked }) => {
    


   
    return (
        <motion.div className={ clicked ? "nav-button open" : "nav-button"} onClick={() => clicked ? setClicked(false) : setClicked(true)}>
                    <motion.span></motion.span>
                    <motion.span></motion.span>
                    <motion.span></motion.span>
                    <motion.span></motion.span>
        </motion.div>
    );
}

export default MenuButton