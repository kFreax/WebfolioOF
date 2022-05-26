import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import React, { Component }  from 'react';
import { Routes, Route, Link, Switch, useNavigate } from "react-router-dom";
import MainPage from "./components/MainPage";
import Posters from "./components/Posters";
function App() {
  return (
    <>
      <Routes>
      <Route exact path='/' element={<MainPage/>}/>
      <Route exact path='posters' element={<Posters/>}/>
      
     </Routes>
    </>
  );
}

export default App;
