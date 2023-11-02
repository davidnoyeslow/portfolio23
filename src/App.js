import React, {useState, useRef, useEffect} from 'react';
import Home from './comps/home';
import MenuButton from './comps/menuButton';
import Navbar from './comps/navbar';
import About from './comps/about';
import Portfolio from './comps/portfolio';
import GlitchFilter from './comps/glitch-filter';
import './css/main.scss';





function App() {
  const [ homeActive, setHomeActive ] = useState(true);
  const [ aboutActive, setAboutActive ] = useState(false);
  const [ portfolioActive, setPortfolioActive ] = useState(false);
  const [ clicked, setClicked ] = useState(false);
  const [ currentBackGrnd, setCurrentBackGrnd] = useState(1);
  const [ lastBackGrnd, setLastBackGrnd ] = useState(null);
  const aboutRef = useRef();

  
    
  return (
    <div className="App"> 
      <MenuButton clicked={clicked} setClicked={setClicked}/>  
      <Navbar key="nav" clicked={clicked} setClicked={setClicked} 
          homeActive={homeActive} setHomeActive={setHomeActive} 
          aboutActive={aboutActive} setAboutActive={setAboutActive}
          portfolioActive={portfolioActive} setPortfolioActive={setPortfolioActive}/>
      <Home id="home" />
      <About lastBackGrnd={lastBackGrnd} currentBackGrnd={currentBackGrnd}/>   
      <Portfolio lastBackGrnd={lastBackGrnd}/> 
      <GlitchFilter />
    </div>
  );
}

export default App;
