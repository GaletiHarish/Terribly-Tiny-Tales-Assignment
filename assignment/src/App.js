
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import { Heading } from './components/Heading';
import { Following } from './components/Following';
import { About } from './components/About';

function App() {
  return (
    <div >
    <header className='Header'>
      <Navbar />
    </header>
    <Home />
    <Heading />
    <Following />
    <About />
    </div>
  );
  
}

export default App;
