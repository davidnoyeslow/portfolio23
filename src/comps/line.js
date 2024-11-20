import React, {useEffect} from "react";
import { motion, useAnimationControls } from 'framer-motion';

function Line() {

  const outline = useAnimationControls();

    const appear = {
      offscreen: {
        opacity: 0
      },
      onscreen: {
        opacity: 1
      }
    }

    useEffect(() => {
        
        outline.start({
          pathLength: [0, 1],
          
          transition: {
           duration: 2,
           delay: 5
            }
          
        })
      }, []);
  return (
    <motion.svg
    className="line"
    xmlns="http://www.w3.org/2000/svg"
    width="593.926"
    height="97.02"
    version="1.1"
    viewBox="0 0 157.143 25.67"
    
  >
    <defs>
      <marker
        id="marker1876"
        markerHeight="2.667"
        markerWidth="2.667"
        orient="auto"
        overflow="visible"
        preserveAspectRatio="xMidYMid"
        refX="1"
        refY="0"
        viewBox="0 0 5.667 5.667"
      >
        <motion.path
        animate={outline}
          fill="context-stroke"
          fillRule="evenodd"
          stroke="context-stroke"
          strokeWidth=".5pt"
          d="M2.5 0a2.5 2.5 0 01-5 0c0-1.38 1.15-2.5 2.5-2.5A2.5 2.5 0 012.5 0z"
        ></motion.path>
      </marker>
      {/* <motion.marker
        id="Dot"
        markerHeight="2.667"
        markerWidth="2.667"
        orient="auto"
        overflow="visible"
        preserveAspectRatio="xMidYMid"
        refX="0"
        refY="0"
        viewBox="0 0 5.667 5.667"
      >
        <motion.path
          animate={outline}
          fill="context-stroke"
          fillRule="evenodd"
          stroke="context-stroke"
          strokeWidth=".5pt"
          d="M2.5 0a2.5 2.5 0 01-5 0c0-1.38 1.15-2.5 2.5-2.5A2.5 2.5 0 012.5 0z"
        ></motion.path>
      </motion.marker> */}
    </defs>
    <g transform="translate(-10.005 -63.12)">
      <motion.path
        animate={outline}
        fill="none"
        fillOpacity="1"
        stroke="#ff0000"
        strokeOpacity="1"
        strokeWidth=".956"
        // markerEnd="url(#marker1876)"
        // markerStart="url(#Dot)"
        d="M12.347 65.461h10.234l10.233 20.913h132.147l-.89.445"
      ></motion.path>
    </g>
  
    </motion.svg>
  );
}

export default Line;