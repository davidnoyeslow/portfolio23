import React from "react";

function LinkFilter () {

    return (
        <svg>
            <filter id="linkFilter">
            
            <feColorMatrix
      in="SourceGraphic"
      type="matrix"
      values="1   0   0   0   0
              0   0   0   0   0
              0   0   0   0   0
              0   0   0   1   0 "
      result="red"/>
    <feColorMatrix
      in="SourceGraphic"
      type="matrix"
      values="0   0   0   0   0
              0   1   0   0   0
              0   0   0   0   0
              0   0   0   1   0 "
      result="green"/>
    <feColorMatrix
      in="SourceGraphic"
      type="matrix"
      values="0   0   0   0   0
              0   0   0   0   0
              0   0   1   0   0
              0   0   0   1   0 "
      result="blue"/>
            
            {/* <feMorphology operator="erode" radius="4" in="blend" result="morph"> 
            <animate attributeName="radius" attributeType="XML" values="0; 1; 2; 3; 2; 5; 0;" dur="2s" repeatCount="indefinite"/> 
            </feMorphology> */}
            <feTurbulence 
                type="turbulence"
                baseFrequency="0.1"
                numOctaves="1"
                result="turbulence"
            >
                <animate attributeName="baseFrequency" attributeType="XML" values="0; 0.1;0.5; 0.9" dur="1s" repeatCount="indefinite" />
            </feTurbulence>
            <feDisplacementMap
                in2="turbulence"
                in="SourceGraphic"
                scale="5"
                xChannelSelector="R"
                yChannelSelector="B"
                y="5%"
                x="10%"
                width="100%"
                height="100%" />
             {/* <feOffset in="red" result="red" dx="-15">
            <animate attributeName="dx" attributeType="XML" values="0; -1; 1; 0; 2; -1; 0;" dur="1s" repeatCount="indefinite"/>
            </feOffset>
            <feOffset in="green" result="green" dx="-10">
            <animate attributeName="dx" attributeType="XML" values="0; 2; -1; 1; 0; 1; 0;" dur=".5s" repeatCount="indefinite"/>
            </feOffset>
            <feOffset in="blue" result="blue" dx="-5">
            <animate attributeName="dx" attributeType="XML" values="0; 1; 2; -4; 2; 6; 0;" dur="2s" repeatCount="indefinite"/>
            </feOffset>
            <feBlend in="red" in2="green" mode="screen" result="blend" />
            <feBlend in="blend" in2="blue" mode="screen" result="blend" /> */}
            
    
                        </filter>
                    </svg>
    );
}

export default LinkFilter;