import React from 'react';
import Home from './components/home/Home';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import NavBar from './components/navbar/NavBar';

function App() {
  return (
    <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
