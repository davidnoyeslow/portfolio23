import React, {useState, useRef, useEffect} from 'react';
import Home from './comps/home';
import MenuButton from './comps/menuButton';
import Navbar from './comps/navbar';
import About from './comps/about';
import Portfolio from './comps/portfolio';
import GlitchFilter from './comps/glitch-filter';
import LinkFilter from './comps/linkFilter';
import './css/main.scss';





function App() {
  const [ homeActive, setHomeActive ] = useState(true);
  const [ aboutActive, setAboutActive ] = useState(false);
  const [ portfolioActive, setPortfolioActive ] = useState(false);
  const [ clicked, setClicked ] = useState(false);

  
  

  return (
    <div className="App"> 
      <MenuButton clicked={clicked} setClicked={setClicked}/>  
      <Navbar key="nav" clicked={clicked} setClicked={setClicked} 
          homeActive={homeActive} setHomeActive={setHomeActive} 
          aboutActive={aboutActive} setAboutActive={setAboutActive}
          portfolioActive={portfolioActive} setPortfolioActive={setPortfolioActive}/>
      <Home />
      <About />   
      <Portfolio /> 
      <GlitchFilter />
      <LinkFilter />
    </div>
  );
}

export default App;
