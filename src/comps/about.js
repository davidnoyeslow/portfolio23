import React, {useState} from "react";
import { motion } from "framer-motion";


const About = ({ lastBackGrnd, currentBackGrnd }) => {
    const [state, setState] = useState({
        openWebCard: false,
        openUXCard: false,
        openBackCard: false
    });

    const jsIcon = {
        hidden: {
          opacity: 0,
          pathLength: 0,
          fillOpacity: 0,
          fill: "rgb(255,255,255, 0)",
          stroke: "rgba(255, 255, 255, 0)"
        },
        visible: {
          opacity: 1,
          pathLength: 1,
          fillOpacity: 1,
          fill: "rgb(255,255,255)",
          stroke: "rgb(255,255,255, 1)"
          
        }
      };

      const reactIcon = {
        hidden: {
          opacity: 0,
          pathLength: 0,
          fillOpacity: 0,
          rotate: 0,
          fill: "rgb(255,255,255, 0)",
          stroke: "rgba(255, 255, 255, 0)"
        },
        visible: {
          opacity: 1,
          pathLength: 1,
          pathOpacity: 0,
          fillOpacity: 0,
          rotate: 360,
          fill: "rgb(255,255,255)",
          stroke: "rgb(255,255,255, 1)"
          
        }
      };
    
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

    const renderBackDrop = (arg1, arg2) => {
        switch(true) {
            case (arg1 === 1): 
                return <>
                    <div className="backdrop-2a"></div> 
                    <div id="about" className="backdrop-2b"></div>
                </>
            case (arg1 === 2 ):
                return <>
                    <div className="backdrop-3a"></div> 
                    <div id="about" className="backdrop-3b"></div>
                </>    
            case (arg1 === 3):
                return <>
                    <div className="backdrop-2a reverse-animation"></div> 
                    <div id="about" className="backdrop-2b reverse-animation2"></div>
                </>        
        }
    }

    
console.log(lastBackGrnd);
    return (
        <>
        <motion.div className="section-wrapper" >
           { renderBackDrop(lastBackGrnd, currentBackGrnd)}
            
            <div className="overlay2" style={{backgroundSize:"6px", opacity: 0.9}}></div>
                <motion.ul className="card-wrapper" initial='offscreen' variants={variants} animate='onscreen'>
                    <motion.li className="about-card" 
                        variants={card}
                        data-openwebcard={state.openWebCard} 
                        onClick={() => setState({...state, openWebCard: state.openWebCard ? false : true, openUXCard: false, openBackCard: false})}>
                        <div className="headline-wrapper">
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
    initial="hidden"
    variants={jsIcon}
                animate="visible"
                transition={{
                    fillOpacity: { delay: 2, duration: 5},
                    fill: { delay: 2, duration: 2, ease: [1, 0, 0.8, 1] },
                    pathLength: { delay:2, duration: 2, repeat: Infinity, ease: "easeIn"}}}>
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
        variants={jsIcon}
                initial="hidden"
                animate="visible"
                transition={{
                    top: { delay: 2, duration: 3, ease: "easeIn"},
                    fill: { delay: 2, duration: 2, ease: [1, 0, 0.8, 1] },
                    pathLength: {  delay: 2, duration: 2, ease: "easeIn"}}}
        
        />
                            </motion.svg>
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
                        data-openuxcard={state.openUXCard}
                        onClick={() => setState({...state, openWebCard: false, openUXCard: state.openUXCard ? false : true, openBackCard: false})}>
                        <div className="headline-wrapper">
                        <motion.svg
    
    width="10px"
    height="10px"
    viewBox="0 0 32 32"
    version="1.1"
    id="svg8605"
    sodipodidocname="react.svg"
    inkscapeversion="1.2 (dc2aeda, 2022-05-15)"
    xmlnsinkscape="http://www.inkscape.org/namespaces/inkscape"
    xmlnssodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
    xmlns="http://www.w3.org/2000/svg"
    xmlnssvg="http://www.w3.org/2000/svg"
    xmlnsrdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
    xmlnscc="http://creativecommons.org/ns#"
    xmlnsdc="http://purl.org/dc/elements/1.1/"
    className="dev-icon react"
    variants={reactIcon}
        initial="hidden"
        animate="visible"
        transition={{
        fillOpacity: { delay: 3, duration: 5},
        fill: { delay: 3, duration: 2, ease: [1, 0, 0.8, 1] },
        pathLength: { delay:3, duration: 2, ease: "easeIn"},
        rotate: { delay:3, duration: 1, type: "spring", stiffness: 260, damping: 200}}}>
    <defs
    id="defs8609">
    <inkscapepath-effect
    effect="ruler"
    id="path-effect9228"
    is_visible="true"
    lpeversion="1"
    unit="px"
    mark_distance="20"
    mark_length="14"
    minor_mark_length="7"
    major_mark_steps="5"
    shift="0"
    offset="0"
    mark_dir="left"
    border_marks="both" />
    <inkscapepath-effect
    effect="knot"
    id="path-effect9226"
    is_visible="true"
    lpeversion="1"
    switcher_size="15"
    interruption_width="3"
    prop_to_stroke_width="true"
    add_stroke_width="inkscape_1.0_and_up"
    both="false"
    inverse_width="false"
    add_other_stroke_width="inkscape_1.0_and_up"
    crossing_points_vector="" />
    <inkscapepath-effect
    effect="tiling"
    id="path-effect9224"
    is_visible="true"
    lpeversion="1"
    unit="px"
    seed="1;1"
    lpesatellites=""
    num_rows="2"
    num_cols="3"
    gapx="-25"
    gapy="0"
    offset="0"
    offset_type="false"
    scale="0"
    rotate="0"
    mirrorrowsx="false"
    mirrorrowsy="false"
    mirrorcolsx="false"
    mirrorcolsy="false"
    mirrortrans="false"
    shrink_interp="false"
    split_items="false"
    link_styles="false"
    interpolate_scalex="false"
    interpolate_scaley="true"
    interpolate_rotatex="false"
    interpolate_rotatey="true"
    random_scale="false"
    random_rotate="false"
    random_gap_y="false"
    random_gap_x="false"
    transformorigin="" />
    <linearGradient
    id="linearGradient9171"
    inkscapeswatch="solid">
    <stop
    style={{stopColor:"#000000", stopOpacity:1}}
    offset="0"
    id="stop9169" />
    </linearGradient>
    </defs>
    <sodipodinamedview
    id="namedview8607"
    pagecolor="#505050"
    bordercolor="#ffffff"
    borderopacity="1"
    inkscapeshowpageshadow="0"
    inkscapepageopacity="0"
    inkscapepagecheckerboard="1"
    inkscapedeskcolor="#505050"
    showgrid="false"
    inkscapezoom="1.0289025"
    inkscapecx="232.77229"
    inkscapecy="342.1121"
    inkscapewindow-width="1309"
    inkscapewindow-height="456"
    inkscapewindow-x="0"
    inkscapewindow-y="23"
    inkscapewindow-maximized="0"
    inkscapecurrent-layer="svg8605" />
    <title
    id="title8601">atom</title>
    <motion.path
    d="m 24.687,16.037 c 2.293,2.473 3.32,4.906 2.429,6.466 -0.889,1.556 -3.481,1.877 -6.738,1.114 -0.975,3.259 -2.554,5.387 -4.341,5.387 -1.789,0 -3.367,-2.135 -4.34,-5.403 -3.293,0.785 -5.916,0.47 -6.812,-1.098 -0.891,-1.56 0.137,-3.996 2.43,-6.472 -2.337,-2.496 -3.389,-4.96 -2.49,-6.532 0.9,-1.576 3.548,-1.887 6.864,-1.087 0.974,-3.275 2.558,-5.416 4.349,-5.416 1.79,0 3.369,2.134 4.342,5.401 3.285,-0.78 5.904,-0.464 6.799,1.102 0.896,1.573 -0.157,4.039 -2.492,6.538 z M 5.752,10.041 c -0.688,1.204 0.261,3.178 2.27,5.265 0.819,-0.799 1.762,-1.592 2.812,-2.354 0.128,-1.266 0.323,-2.467 0.59,-3.56 C 8.617,8.671 6.443,8.832 5.752,10.041 Z m 4.969,4.32 c -0.72,0.548 -1.377,1.104 -1.966,1.659 0.597,0.558 1.241,1.118 1.97,1.67 -0.03,-0.555 -0.051,-1.116 -0.051,-1.69 0,-0.556 0.018,-1.102 0.047,-1.639 z m 0.112,4.733 C 9.782,18.335 8.842,17.544 8.02,16.748 c -1.973,2.068 -2.889,4.019 -2.207,5.213 0.687,1.201 2.838,1.368 5.62,0.662 -0.267,-1.087 -0.473,-2.269 -0.6,-3.529 z m 9.256,0.741 c -0.446,0.293 -0.902,0.581 -1.377,0.858 -0.482,0.281 -0.964,0.539 -1.444,0.785 0.823,0.35 1.628,0.655 2.392,0.889 0.179,-0.784 0.318,-1.639 0.429,-2.532 z m -4.053,8.085 c 1.369,0 2.584,-1.785 3.37,-4.557 -1.085,-0.312 -2.231,-0.746 -3.399,-1.274 -1.147,0.521 -2.269,0.94 -3.337,1.253 0.784,2.779 1.997,4.578 3.366,4.578 z m -3.613,-5.578 c 0.742,-0.231 1.518,-0.518 2.316,-0.858 -0.482,-0.247 -0.967,-0.508 -1.451,-0.79 -0.449,-0.263 -0.881,-0.533 -1.304,-0.81 0.109,0.877 0.264,1.686 0.439,2.458 z M 11.986,12.156 c 0.441,-0.289 0.893,-0.573 1.362,-0.848 0.463,-0.271 0.926,-0.52 1.388,-0.758 -0.801,-0.342 -1.585,-0.644 -2.331,-0.877 -0.174,0.77 -0.309,1.609 -0.419,2.483 z m 4.05,-8.076 c -1.373,0 -2.594,1.802 -3.379,4.594 1.067,0.314 2.191,0.745 3.336,1.267 C 17.165,9.404 18.311,8.975 19.402,8.657 18.618,5.88 17.406,4.08 16.036,4.08 Z m 3.615,5.575 c -0.768,0.239 -1.57,0.535 -2.398,0.891 0.465,0.239 0.932,0.49 1.398,0.763 0.502,0.293 0.982,0.598 1.451,0.908 -0.11,-0.915 -0.269,-1.76 -0.451,-2.562 z m 0.589,3.949 c -0.67,-0.466 -1.378,-0.921 -2.126,-1.356 -0.716,-0.418 -1.426,-0.783 -2.128,-1.124 -0.693,0.338 -1.396,0.713 -2.101,1.124 -0.713,0.415 -1.394,0.849 -2.035,1.291 -0.062,0.797 -0.104,1.613 -0.104,2.462 0,0.858 0.035,1.693 0.097,2.499 0.627,0.431 1.289,0.852 1.981,1.256 0.736,0.429 1.466,0.804 2.188,1.152 0.713,-0.346 1.437,-0.729 2.162,-1.152 0.719,-0.419 1.402,-0.855 2.049,-1.302 0.061,-0.794 0.104,-1.607 0.104,-2.453 0,-0.822 -0.03,-1.623 -0.087,-2.397 z m 5.947,8.357 c 0.682,-1.192 -0.242,-3.14 -2.211,-5.203 -0.801,0.774 -1.718,1.542 -2.736,2.281 -0.128,1.282 -0.326,2.499 -0.598,3.604 2.746,0.685 4.865,0.508 5.545,-0.682 z M 21.353,17.63 c 0.689,-0.526 1.321,-1.06 1.891,-1.591 -0.572,-0.54 -1.189,-1.083 -1.887,-1.618 0.025,0.519 0.043,1.044 0.043,1.579 -10e-4,0.554 -0.019,1.096 -0.047,1.63 z m 4.894,-7.589 c -0.686,-1.199 -2.83,-1.369 -5.605,-0.666 0.273,1.118 0.484,2.339 0.61,3.641 1.019,0.745 1.93,1.52 2.728,2.299 2.013,-2.091 2.957,-4.068 2.267,-5.274 z M 16.2,18.062 c -1.177,0 -2.131,-0.963 -2.131,-2.152 0,-1.189 0.954,-2.152 2.131,-2.152 1.176,0 2.13,0.964 2.13,2.152 0,1.19 -0.954,2.152 -2.13,2.152 z"
    id="path8603"
    className="UnoptimicedTransforms"
    variants={reactIcon}
    initial="hidden"
    animate="visible"
        transition={{
        fillOpacity: { delay: 3, duration: 5},
        fill: { delay: 3, duration: 2, ease: [1, 0, 0.8, 1] },
        pathLength: { delay:3, duration: 2, ease: "easeIn"}}} />
                            </motion.svg>
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
                        data-openbackcard={state.openBackCard} 
                        onClick={() => setState({...state, openWebCard: false, openUXCard: false, openBackCard: state.openBackCard ? false : true})}>
                        <div className="headline-wrapper">
                        <motion.svg className="dev-icon node" fill="#ffffff" width="800px" height="800px" viewBox="0 0 31 32" xmlns="http://www.w3.org/2000/svg">
                        <motion.path d="M 21.300781 6 C 21.143781 6 21 6.1257812 21 6.3007812 L 21 11.796875 L 19.753906 11.070312 C 19.675906 11.024313 19.588 11.001953 19.5 11.001953 C 19.412 11.001953 19.324094 11.024312 19.246094 11.070312 L 16.251953 12.816406 C 16.095953 12.906406 16 13.072953 16 13.251953 L 16 16.748047 C 16 16.928047 16.095953 17.093594 16.251953 17.183594 L 19.246094 18.929688 C 19.324094 18.975687 19.412 18.998047 19.5 18.998047 C 19.588 18.998047 19.675906 18.975688 19.753906 18.929688 L 22.748047 17.183594 C 22.904047 17.093594 23 16.927047 23 16.748047 L 23 15 L 23 13.251953 L 23 7.2304688 C 23 7.0524688 22.904953 6.8888281 22.751953 6.7988281 L 21.449219 6.0410156 C 21.400219 6.0130156 21.350781 6 21.300781 6 z M 11.5 11.001953 C 11.41225 11.001953 11.324594 11.024813 11.246094 11.070312 L 8.2519531 12.816406 C 8.0959531 12.906406 8 13.072953 8 13.251953 L 8 16.748047 C 8 16.928047 8.0959531 17.093594 8.2519531 17.183594 L 11.246094 18.929688 C 11.403094 19.020688 11.596906 19.020688 11.753906 18.929688 L 14.748047 17.183594 C 14.904047 17.093594 15 16.927047 15 16.748047 L 15 13.251953 C 15 13.071953 14.904047 12.906406 14.748047 12.816406 L 11.753906 11.070312 C 11.675406 11.024812 11.58775 11.001953 11.5 11.001953 z M 27.5 11.001953 C 27.412 11.001953 27.324094 11.024312 27.246094 11.070312 L 24.251953 12.816406 C 24.095953 12.906406 24 13.072953 24 13.251953 L 24 16.748047 C 24 16.928047 24.095953 17.093594 24.251953 17.183594 L 27.15625 18.939453 C 27.31225 19.034453 27.508016 19.035359 27.666016 18.943359 L 29.09375 18.113281 C 29.24175 18.028281 29.24275 17.813562 29.09375 17.726562 L 26 15.904297 L 26 14.109375 L 27.5 13.236328 L 29 14.109375 L 29 15.359375 C 29 15.526375 29.140375 15.552094 29.234375 15.496094 C 29.612375 15.274094 30.751953 14.613281 30.751953 14.613281 C 30.904953 14.524281 31 14.359641 31 14.181641 L 31 13.251953 C 31 13.071953 30.904047 12.906406 30.748047 12.816406 L 27.753906 11.070312 C 27.674906 11.024313 27.588 11.001953 27.5 11.001953 z M 3.5 11.003906 C 3.412 11.003906 3.3240937 11.026266 3.2460938 11.072266 L 0.25195312 12.816406 C 0.095953125 12.907406 0 13.073906 0 13.253906 L 0 17.716797 C 0 17.934797 0.23582812 18.069938 0.42382812 17.960938 L 1.7519531 17.1875 C 1.9049531 17.0975 2 16.933859 2 16.755859 L 2 14.113281 L 3.5 13.238281 L 5 14.113281 L 5 16.755859 C 5 16.933859 5.0950469 17.0975 5.2480469 17.1875 L 6.5761719 17.960938 C 6.7641719 18.070938 7 17.934797 7 17.716797 L 7 13.253906 C 7 13.073906 6.9040469 12.907406 6.7480469 12.816406 L 3.7539062 11.072266 C 3.6759063 11.026266 3.588 11.003906 3.5 11.003906 z M 19.5 13.236328 L 21 14.111328 L 21 15 L 21 15.888672 L 19.5 16.763672 L 18 15.888672 L 18 14.111328 L 19.5 13.236328 z M 27.5 14.003906 L 26.642578 14.503906 L 26.642578 15.501953 L 27.5 16 L 28.357422 15.501953 L 28.357422 14.503906 L 27.5 14.003906 z M 15.40625 17.998047 C 15.303375 17.998047 15.199375 18.023219 15.109375 18.074219 L 12.296875 19.699219 C 12.111875 19.801219 12 20.001938 12 20.210938 L 12 23.457031 C 12 23.666031 12.116875 23.86275 12.296875 23.96875 L 13.037109 24.390625 C 13.392109 24.565625 13.522594 24.566406 13.683594 24.566406 C 14.213594 24.566406 14.515625 24.249453 14.515625 23.689453 L 14.515625 20.482422 C 14.515625 20.433422 14.477594 20.398438 14.433594 20.398438 L 14.078125 20.398438 C 14.029125 20.398438 13.994141 20.438422 13.994141 20.482422 L 13.994141 23.689453 C 13.994141 23.932453 13.737359 24.181656 13.318359 23.972656 L 12.548828 23.529297 C 12.523828 23.514297 12.505859 23.484078 12.505859 23.455078 L 12.505859 20.208984 C 12.505859 20.179984 12.519828 20.145859 12.548828 20.130859 L 15.361328 18.509766 C 15.391328 18.494766 15.425219 18.494766 15.449219 18.509766 L 18.263672 20.130859 C 18.292672 20.145859 18.306641 20.174984 18.306641 20.208984 L 18.306641 23.455078 C 18.306641 23.489078 18.287672 23.518203 18.263672 23.533203 L 15.449219 25.160156 C 15.424219 25.175156 15.385328 25.175156 15.361328 25.160156 L 14.642578 24.732422 C 14.623578 24.722422 14.593219 24.716562 14.574219 24.726562 C 14.375219 24.843563 14.335391 24.858875 14.150391 24.921875 C 14.101391 24.936875 14.034781 24.966922 14.175781 25.044922 L 15.109375 25.599609 C 15.202375 25.648609 15.30425 25.677734 15.40625 25.677734 C 15.51325 25.677734 15.617219 25.648703 15.699219 25.595703 L 18.511719 23.96875 C 18.696719 23.86675 18.808594 23.666031 18.808594 23.457031 L 18.808594 20.210938 C 18.808594 20.001938 18.691719 19.806219 18.511719 19.699219 L 15.699219 18.074219 C 15.611719 18.023219 15.509125 17.998047 15.40625 17.998047 z M 19.792969 19.496094 C 19.505969 19.496094 19.253906 19.728156 19.253906 20.035156 C 19.253906 20.332156 19.495969 20.576172 19.792969 20.576172 C 20.089969 20.576172 20.332031 20.332156 20.332031 20.035156 C 20.332031 19.728156 20.084969 19.491094 19.792969 19.496094 z M 19.787109 19.582031 C 20.041109 19.582031 20.246094 19.782156 20.246094 20.035156 C 20.246094 20.283156 20.040109 20.488141 19.787109 20.494141 C 19.538109 20.494141 19.335938 20.288156 19.335938 20.035156 C 19.335938 19.782156 19.539109 19.582031 19.787109 19.582031 z M 19.589844 19.728516 L 19.589844 20.335938 L 19.705078 20.335938 L 19.705078 20.09375 L 19.8125 20.09375 C 19.8565 20.09375 19.866953 20.112484 19.876953 20.146484 C 19.876953 20.151484 19.895391 20.308891 19.900391 20.337891 L 20.025391 20.337891 C 20.011391 20.308891 20.001094 20.225781 19.996094 20.175781 C 19.982094 20.097781 19.977531 20.044062 19.894531 20.039062 C 19.938531 20.024063 20.011719 20.000672 20.011719 19.888672 C 20.011719 19.727672 19.871828 19.728516 19.798828 19.728516 L 19.589844 19.728516 z M 19.705078 19.826172 L 19.802734 19.826172 C 19.832734 19.826172 19.890625 19.825203 19.890625 19.908203 C 19.890625 19.942203 19.875875 19.997094 19.796875 19.996094 L 19.705078 19.996094 L 19.705078 19.826172 z M 16.160156 20.322266 C 15.357156 20.322266 14.880859 20.664516 14.880859 21.228516 C 14.880859 21.846516 15.357953 22.011844 16.126953 22.089844 C 17.046953 22.181844 17.119141 22.314141 17.119141 22.494141 C 17.119141 22.810141 16.865484 22.941406 16.271484 22.941406 C 15.526484 22.941406 15.362594 22.756719 15.308594 22.386719 C 15.303594 22.347719 15.268609 22.318359 15.224609 22.318359 L 14.859375 22.318359 C 14.815375 22.318359 14.777344 22.353344 14.777344 22.402344 C 14.777344 22.874344 15.034625 23.439453 16.265625 23.439453 C 17.168625 23.438453 17.679688 23.088609 17.679688 22.474609 C 17.679688 21.866609 17.270297 21.704891 16.404297 21.587891 C 15.528297 21.470891 15.441406 21.412031 15.441406 21.207031 C 15.441406 21.037031 15.513156 20.814453 16.160156 20.814453 C 16.739156 20.814453 16.954969 20.941078 17.042969 21.330078 C 17.052969 21.369078 17.080141 21.392578 17.119141 21.392578 L 17.484375 21.392578 C 17.508375 21.392578 17.528969 21.383141 17.542969 21.369141 C 17.557969 21.350141 17.5675 21.330641 17.5625 21.306641 C 17.5045 20.634641 17.061156 20.322266 16.160156 20.322266 z"
                        />
                            </motion.svg>
                            <h2 className="headline">Back End<br></br>Dev</h2>
                        </div>
                        
                        <div className="details-wrapper">
                            <p className="details">Experienced with creating APIs and maintaining 
                                application databases with Express, MongoDB and Firebase.
                            </p>
                        </div>
                    </motion.li>
                </motion.ul>
        </motion.div>
        </>
    )
}

export default About;