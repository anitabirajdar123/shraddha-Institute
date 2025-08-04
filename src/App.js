// File: src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Teachers from "./pages/Teachers";
import Videos from "./pages/Videos";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Demo from "./pages/Demo";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
