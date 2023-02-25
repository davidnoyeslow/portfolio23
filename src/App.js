import React, {useState, useCallback, useEffect} from 'react';
import Home from './comps/home';
import Header from './comps/header';
import MenuButton from './comps/menuButton';
import Navbar from './comps/navbar';
import About from './comps/about';
import './css/style.css';

function App() {
  const [ aboutActive, setAboutActive ] = useState(false);
  const [ clicked, setClicked ] = useState(false);
  
  const showMenu = useCallback((clicked) => {
    setClicked(clicked)
  }, []);

  return (
    <div className="App">
      
        
        <Home/> 
        <MenuButton parentCallback={showMenu}/>  
        <Navbar clicked={clicked} setClicked={setClicked} aboutActive={aboutActive} setAboutActive={setAboutActive}/>
        { aboutActive && <About/> }
     
      
        
    </div>
  );
}

export default App;
