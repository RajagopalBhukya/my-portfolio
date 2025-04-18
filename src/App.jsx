import React from 'react';
import Navbar from './Components/Navbar';
import {Hero} from './Components/Hero';
import {About} from './Components/About'
import {Services} from './Components/Services'
import { Contact } from './Components/Contact';






function App() {
  return (
    <> 
       <div className='bg-[#0e0c1e]'>
            <Navbar/>
            <Hero/>
            <About/>
            <Services/>
            <Contact/>
        </div>
    </>

  );
}

export default App;
