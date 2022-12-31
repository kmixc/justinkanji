import * as React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Resume from "./pages/Resume";

//PORTFOLIO LINKS
import Cradle from "./pages/portfolio/Cradle";
import FNTSY from "./pages/portfolio/FNTSY";
import Chariot from "./pages/portfolio/Chariot";
import AllWork from "./pages/portfolio/AllWork";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/cradle" element={<Cradle />} />
        <Route path="/fntsy" element={<FNTSY />} />
        <Route path="/chariot" element={<Chariot />} />
        <Route path="/all" element={<AllWork />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
