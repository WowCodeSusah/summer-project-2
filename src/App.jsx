import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar'; 
import MainPage from './components/MainPage';
import NavbarMain from './components/NavbarMain';

function App() {
  // change this with context later and add theme
  const login = false

  return (
    <BrowserRouter>
      { login ? <Navbar /> : <NavbarMain />}
      <Routes>
        <Route path="/" element={<MainPage />} /> 
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;