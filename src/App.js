import React from "react";
import "./App.css";
import {Route, Routes } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import CQV from "./pages/CQV";
import Thermal from "./pages/Thermal";
import Process from './pages/Process';
import TankVessel from "./pages/TankVessel"
import GMPAutoclave from "./pages/GMPAutoclave";
import About from "./pages/About";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function App()  {
  return (
    <>
    <Navbar/> 
    <Routes> 
          <Route exact 
          path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/GMPAutoclave" element={<GMPAutoclave/>}/>
          <Route path="/TankVessel" element={<TankVessel/>}/>
          <Route path="/Process" element={<Process/>}/>
          <Route path="/Thermal" element={<Thermal/>}/>
          <Route path="/CQV" element={<CQV/>}/>
        
          <Route path="/Contact" element={<Contact/>}/>
    </Routes>
    <Footer />
    </>
  )
}

export default App;