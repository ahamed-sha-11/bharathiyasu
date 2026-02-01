import React from 'react';
import Hero from '../hero/Hero';
import NavBar from '../navbar/NavBar';
import Publications from '../publications/publications';
function Home() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Hero></Hero>
      <Publications></Publications>
      
    </div>
  );
}

export default Home;
