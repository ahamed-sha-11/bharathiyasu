import React from 'react';
import Hero from '../hero/Hero';
import NavBar from '../navbar/NavBar';
import Publications from '../publications/publications';
import Career from '../career/Career';

function Home() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Hero></Hero>
      <Publications></Publications>
      <Career></Career>
      
    </div>
  );
}

export default Home;
