import React from "react";

function GlitchFilter () {

    return (
        <svg>
            <filter id="glitch">
            
            {/* <feColorMatrix
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
      result="blue"/> */}
            <feMorphology operator="erode" radius="4" in="blend" result="morph"> 
            <animate attributeName="radius" attributeType="XML" values="0; 1; 2; 3; 2; 5; 0;" dur="2s" repeatCount="indefinite"/> 
            </feMorphology>
            <feDisplacementMap
                in2="erode"
                in="blend"
                scale="2"
                xChannelSelector="R"
                yChannelSelector="G" />
             <feOffset in="red" result="red" dx="-15">
            <animate attributeName="dx" attributeType="XML" values="0; -1; 1; 0; 2; -1; 0;" dur="1s" repeatCount="indefinite"/>
            </feOffset>
            <feOffset in="green" result="green" dx="-10">
            <animate attributeName="dx" attributeType="XML" values="0; 2; -1; 1; 0; 1; 0;" dur=".5s" repeatCount="indefinite"/>
            </feOffset>
            <feOffset in="blue" result="blue" dx="-5">
            <animate attributeName="dx" attributeType="XML" values="0; 1; 2; -4; 2; 6; 0;" dur="2s" repeatCount="indefinite"/>
            </feOffset>
            <feBlend in="red" in2="green" mode="screen" result="blend" />
            <feBlend in="blend" in2="blue" mode="screen" result="blend" />
            
        <feGaussianBlur in="blend" stdDeviation="1" result="blur">
            <animate attributeName="stdDeviation" attributeType="XML" values="0; 2; 1; 0.3; 2; 1; 0.5 ;3; 0" dur="5s" repeatCount="indefinite"/>
        </feGaussianBlur>
        
        {/* <feMerge>
            <feMergeNode in="morph" />
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
        </feMerge> */}
                        </filter>
                    </svg>
    );
}

export default GlitchFilter;