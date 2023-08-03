import React, {useEffect} from "react";
import { motion, useAnimationControls } from 'framer-motion';

function Name() {
    const outline = useAnimationControls();

    useEffect(() => {
        
        outline.start({
          pathLength: [0, 1],
          fillOpacity: [0, 1],
          fill: "#000",
          stroke: "#000",
          transition: {
            fillOpacity: {
              delay:2,
              duration:1
            },
            
            duration: 2
            }
          
        })
      }, []);

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="312.488"
      height="126.158"
      version="1.1"
      viewBox="0 0 82.679 33.379"
      className="name"
    >
      <defs>
        <marker
          id="marker5343"
          markerHeight="1.667"
          markerWidth="1.667"
          orient="auto"
          overflow="visible"
          preserveAspectRatio="xMidYMid"
          refX="0"
          refY="0"
          viewBox="0 0 5.667 5.667"
        >
          <motion.path
            fill="context-stroke"
            fillRule="evenodd"
            stroke="context-stroke"
            strokeWidth=".5pt"
            d="M2.5 0a2.5 2.5 0 01-5 0c0-1.38 1.15-2.5 2.5-2.5A2.5 2.5 0 012.5 0z"
            animate={outline}
          ></motion.path>
        </marker>
        <marker
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
            fill="context-stroke"
            fillRule="evenodd"
            stroke="context-stroke"
            strokeWidth=".5pt"
            d="M2.5 0a2.5 2.5 0 01-5 0c0-1.38 1.15-2.5 2.5-2.5A2.5 2.5 0 012.5 0z"
          ></motion.path>
        </marker>
      </defs>
      <g transform="translate(-25.98 -55.372)">
        <g
          stroke="#000"
          strokeOpacity="1"
          ariaLabel="digitalnoyes"
          style={{}}
          strokeWidth="0.511"
          fontFamily="Electronica Display Solid"
          fontSize="19.756"
          transform="translate(1.136)"
        >
          <motion.path
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            d="M31.806 56.45h-5.57v14.223h5.57c4.445 0 7.112-2.667 7.112-7.112s-2.667-7.112-7.112-7.112zm0 11.142h-1.778v-8.06h1.778c2.134 0 3.32 1.441 3.32 4.03 0 2.587-1.186 4.03-3.32 4.03z"
            animate={outline}
          ></motion.path>
          <motion.path
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            d="M45.319 67.592v-8.06h1.422v-3.083h-6.637v3.082h1.422v8.06h-1.422v3.082h6.637v-3.081z"
            animate={outline}
          ></motion.path>
          <motion.path
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            d="M62.309 62.455h-7.27v2.608h3.635c-.553 1.422-1.877 2.41-3.398 2.41a3.92 3.92 0 01-3.912-3.912 3.92 3.92 0 013.912-3.911c1.264 0 2.39.592 3.101 1.54l2.727-2.093a7.317 7.317 0 00-5.828-2.885c-4.07 0-7.35 3.3-7.35 7.35 0 4.069 3.28 7.348 7.35 7.348 3.931 0 7.112-3.279 7.112-7.349 0-.375-.02-.75-.08-1.106z"
            animate={outline}
          ></motion.path>
          <motion.path
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            d="M68.789 67.592v-8.06h1.422v-3.083h-6.638v3.082h1.423v8.06h-1.423v3.082h6.638v-3.081z"
            animate={outline}
          ></motion.path>
          <motion.path
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            d="M71.396 56.45v3.081h3.675v11.142h3.793V59.531h3.675V56.45z"
            animate={outline}
          ></motion.path>
          <motion.path
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            d="M88.228 55.975l-6.875 14.698h13.75zm0 7.843l1.877 4.01H86.35z"
            animate={outline}
          ></motion.path>
          <motion.path
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            d="M100.477 56.45h-3.794v14.223h9.72v-3.081h-5.926z"
            animate={outline}
          ></motion.path>
          <path
            fill="none"
            stroke="#fff"
            strokeDasharray="none"
            strokeWidth="0.911"
            d="M41.113 67.914v6.994l-8.06-7.468v14.698h3.793v-6.993l8.06 7.468V67.914z"
            className="noyes"
          ></path>
          <path
            fill="none"
            stroke="#fff"
            strokeDasharray="none"
            strokeWidth="0.911"
            d="M69.956 67.914l-2.568 4.307-2.568-4.307h-4.425l5.097 8.535v5.69h3.793v-5.69l5.097-8.535z"
            className="noyes"
          ></path>
          <path
            fill="none"
            stroke="#fff"
            strokeDasharray="none"
            strokeWidth="0.911"
            d="M79.36 79.057v-2.49h5.453v-3.081H79.36v-2.49h4.03v-3.082h-7.823v14.224h10.668v-3.081z"
            className="noyes"
          ></path>
          <path
            fill="none"
            stroke="#fff"
            strokeDasharray="none"
            strokeWidth="0.911"
            d="M91.332 72.182c0-.83.77-1.304 2.133-1.304 1.364 0 2.134.553 2.134 1.54h3.793c0-3.042-2.114-4.74-5.927-4.74-3.812 0-5.926 1.62-5.926 4.504 0 5.808 8.179 2.844 8.179 5.69 0 .829-.81 1.303-2.253 1.303-1.442 0-2.252-.553-2.252-1.54H87.42c0 3.042 2.154 4.74 6.045 4.74 3.873 0 6.046-1.6 6.046-4.504 0-5.808-8.18-2.845-8.18-5.69z"
            className="noyes"
          ></path>
        </g>
        <text
          xmlSpace="preserve"
          style={{}}
          x="39.813"
          y="115.432"
          fill="#000"
          fillOpacity="1"
          stroke="#000"
          strokeWidth="0.511"
          fontFamily="Electronica Display Solid"
          fontSize="19.756"
        ></text>
        <text
          xmlSpace="preserve"
          style={{}}
          x="38.818"
          y="87.863"
          fill="#000"
          fillOpacity="1"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeOpacity="1"
          strokeWidth="0.311"
          fontFamily="Electronica Display Solid"
          fontSize="4.939"
        >
          <tspan
            x="38.818"
            y="87.863"
            fill="#000"
            fillOpacity="1"
            strokeDasharray="none"
            strokeWidth="0.311"
          >
            development/design
          </tspan>
        </text>
        <g
          fill="none"
          stroke="#fff"
          strokeDasharray="none"
          strokeOpacity="1"
          strokeWidth="0.779"
          paintOrder="stroke markers fill"
          transform="matrix(.57222 0 0 .53929 -3.31 -5.432)"
        >
          <path
            strokeDashoffset="0"
            strokeWidth="0.779"
            // markerStart="url(#Dot)"
            d="M90.475 142.952a13.67 13.874 0 0115.862-6.827 13.67 13.874 0 019.846 14.35 13.67 13.874 0 01-11.81 12.731 13.67 13.874 0 01-14.706-9.11"
            className="coil"
          ></path>
          <path
            strokeWidth="0.779"
            d="M92.486 146.768a10.468 10.469 0 0111.257-7.583 10.468 10.469 0 019.28 9.907 10.468 10.469 0 01-8.302 10.74 10.468 10.469 0 01-11.924-6.485"
          ></path>
          <path
            strokeDashoffset="0"
            strokeWidth="0.794"
            d="M94.582 147.235a8.065 7.92 0 018.633-5.593 8.065 7.92 0 017.14 7.35 8.065 7.92 0 01-6.096 8.205 8.065 7.92 0 01-9.306-4.432"
          ></path>
          <path
            strokeWidth="0.809"
            d="M96.542 147.859a6.055 6.13 0 016.35-4.622 6.055 6.13 0 015.554 5.575 6.055 6.13 0 01-4.509 6.47 6.055 6.13 0 01-7.049-3.43"
          ></path>
          <path
            strokeWidth="0.821"
            // markerEnd="url(#marker5343)"
            d="M97.835 148.386a4.667 4.669 0 014.175-3.722 4.667 4.669 0 014.748 2.957 4.667 4.669 0 01-1.497 5.39 4.667 4.669 0 01-5.593.084"
          ></path>
        </g>
        <path
          fill="#fff"
          fillOpacity="1"
          stroke="#fff"
          strokeDasharray="none"
          strokeOpacity="1"
          strokeWidth="0.389"
          d="M54.86 75.54l-8.417-3.237.05 6.037z"
        ></path>
      </g>
    </motion.svg>
  );
}

export default Name;