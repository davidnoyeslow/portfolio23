import React, {useState} from 'react';
import Home from './comps/home';
import MenuButton from './comps/menuButton';
import Navbar from './comps/navbar';
import About from './comps/about';
import Portfolio from './comps/portfolio';
import './css/style.css';
import './css/style2.scss';



function App() {
  const [ homeActive, setHomeActive ] = useState(true);
  const [ aboutActive, setAboutActive ] = useState(false);
  const [ portfolioActive, setPortfolioActive ] = useState(false);
  const [ clicked, setClicked ] = useState(false);
  const [ currentBackGrnd, setCurrentBackGrnd] = useState(1);
  const [ lastBackGrnd, setLastBackGrnd ] = useState(null);
  
  return (
    <div className="App">
    
      { homeActive &&  <Home /> }
      <MenuButton clicked={clicked} setClicked={setClicked}/>  
      <Navbar clicked={clicked} setClicked={setClicked}
      currentBackGrnd={currentBackGrnd} setCurrentBackGrnd={setCurrentBackGrnd}
      lastBackGrnd={lastBackGrnd} setLastBackGrnd={setLastBackGrnd} 
      homeActive={homeActive} setHomeActive={setHomeActive} 
      aboutActive={aboutActive} setAboutActive={setAboutActive}
      portfolioActive={portfolioActive} setPortfolioActive={setPortfolioActive}/>
      { aboutActive && <About lastBackGrnd={lastBackGrnd} currentBackGrnd={currentBackGrnd}/> }
      { portfolioActive && <Portfolio lastBackGrnd={lastBackGrnd}/> }
    </div>
  );
}

export default App;
