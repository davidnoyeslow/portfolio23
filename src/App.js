import React, {useState, useCallback, useEffect, useRef} from 'react';
import Home from './comps/home';
import MenuButton from './comps/menuButton';
import Navbar from './comps/navbar';
import About from './comps/about';
import './css/style.css';



function App() {
  const [ homeActive, setHomeActive ] = useState(true);
  const [ aboutActive, setAboutActive ] = useState(false);
  const [ clicked, setClicked ] = useState(false);
  
  

 

  

  return (
    <div className="App">
      
        
        { homeActive && <Home/> }
        <MenuButton clicked={clicked} setClicked={setClicked}/>  
        <Navbar clicked={clicked} setClicked={setClicked} homeActive={homeActive} setHomeActive={setHomeActive} aboutActive={aboutActive} setAboutActive={setAboutActive}/>
        { aboutActive && <About/> }
     
      
        
    </div>
  );
}

export default App;
