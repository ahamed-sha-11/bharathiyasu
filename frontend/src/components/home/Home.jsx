import React from 'react';
import Hero from '../hero/Hero';
import NavBar from '../navbar/NavBar';
import Publications from '../publications/publications';
import Career from '../career/Career';
import Blog from '../blog/Blog';

function Home() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Hero></Hero>
      <Publications></Publications>
      <Career></Career>
      <Blog></Blog>
      
    </div>
  );
}

export default Home;
