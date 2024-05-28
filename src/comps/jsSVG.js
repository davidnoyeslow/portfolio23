import React, {useEffect} from "react";
import { motion, useAnimationControls } from 'framer-motion';

const JsSVG = () => {
    const outline = useAnimationControls();

    useEffect(() => {
        
        outline.start({
          pathLength: [0, 1],
          fillOpacity: [0, 1],
          opacity: [0, 1],
          stroke: "rgba(255, 255, 255, 1)",
          transition: {
            fillOpacity: { delay: .5, duration: 5},
            fill: { delay: .5, duration: 2, ease: [1, 0, 0.8, 1] },
            pathLength: { delay:.5, duration: 2, ease: "easeIn"}}
          })
      }, []);


    return (
        <motion.svg
    width="10px"
    height="10px"
    viewBox="-5 -5 1034 1034"
    version="1.1"
    id="svg4"
    className="dev-icon js"
    sodipodidocname="javascript.svg"
    inkscapeversion="1.2 (dc2aeda, 2022-05-15)"
    xmlnsinkscape="http://www.inkscape.org/namespaces/inkscape"
    xmlnssodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
    xmlns="http://www.w3.org/2000/svg"
    xmlnssvg="http://www.w3.org/2000/svg"
    animate={outline}
                >
    <defs
        id="defs8" />
    <sodipodinamedview
        id="namedview6"
        pagecolor="#505050"
        bordercolor="#ffffff"
        borderopacity="1"
        inkscapeshowpageshadow="0"
        inkscapepageopacity="0"
        inkscapepagecheckerboard="1"
        inkscapedeskcolor="#505050"
        showgrid="false"
        inkscapezoom="0.295"
        inkscapecx="138.98305"
        inkscapecy="410.16949"
        inkscapewindow-width="1320"
        inkscapewindow-height="642"
        inkscapewindow-x="180"
        inkscapewindow-y="245"
        inkscapewindow-maximized="0"
        inkscapecurrent-layer="svg4" />
    <motion.path
        fill="#ffffff"
        d="M 75,98.135593 V 948.13559 H 925 V 98.135593 Z M 722,483.13559 q 39,0 66.5,15 27.5,15 46.5,49 l -62,40 q -10,-18 -22,-26 -12,-8 -29,-8 -17,0 -27.5,9.5 -10.5,9.5 -10.5,24.5 0,17 11,28 10,9 38,21 l 20,8 q 55,24 78,49 28,30 28,77 0,52 -38,82 -36,29 -95,29 -53,0 -91,-23 -35,-22 -54,-59 l 65,-37 q 14,23 31,35 20,13 48,13 24,0 39,-11 15,-11 15,-29 0,-18 -15,-30 -11,-8 -43,-22 l -20,-9 q -48,-20 -70,-45 -26,-29 -26,-75 0,-46 32,-76 32,-30 85,-30 z m -264,5 h 80 v 273 q 0,60 -34,91 -31,29 -86,29 -45,0 -77,-21 -27,-19 -43,-52 l 66,-39 q 11,21 20,29 12,12 31,12 21,0 31,-10 12,-12 12,-40 z"
        id="path2"
        className="dev-icon"
        animate={outline}/>
                            </motion.svg>

    );
}

export default JsSVG;