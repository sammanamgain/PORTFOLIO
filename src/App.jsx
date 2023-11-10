import Contact from './Pages/Contact';
import Home from './Pages/Home'
import {  Routes, Route } from "react-router-dom";
import React from 'react';
import Project from './Pages/Project';
import About from './Pages/About';
function App() {


  return (
  
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/project' element={<Project/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>

    
  )
}

export default App
