import React, {useState} from 'react';
import Header from './comps/header';
import Navbar from './comps/navbar';
import About from './comps/about';

import './css/style.css';

function App() {
  const [aboutActive, setAboutActive] = useState(false);
  

  return (
    <div className="App">
    
      <div className='body'>
        <div className='overlay2'></div>
        <div className='crt'></div>
        <div className='crt'></div>
        <div className='crt'></div>
        <div className='crt'></div>
      </div>
      
        {/* <div className='overlay'></div> */}
        
        <Navbar aboutActive={aboutActive} setAboutActive={setAboutActive}/>
       { aboutActive && <About/> }
     
      
      
    </div>
  );
}

export default App;
