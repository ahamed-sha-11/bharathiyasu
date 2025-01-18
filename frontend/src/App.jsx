import React from 'react';
import Hero from './components/hero/Hero';
import NavBar from './components/navbar/NavBar';
import './App.css'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Hero></Hero>
    </div>
  );
}

export default App;
