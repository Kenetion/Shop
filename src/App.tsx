import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from '../src/components/navbar';
import { Home } from './pages/main';
import { Shop } from './pages/shop';
import { Contact } from './pages/contact';
// import { useState, useEffect } from 'react';






function App() {

  //todo: add dark mode
  

  

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
