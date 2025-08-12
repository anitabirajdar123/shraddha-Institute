import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs";
import Franchise from "./components/Franchise";
import Training from "./components/Training";
import Gallery from "./components/Gallery";
import DemoAndContact from "./components/DemoAndContact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import AboutUs from "./pages/AboutUs";
import ProgramsPage from "./pages/ProgramsPage";
import GalleryPage from "./pages/GalleryPage";
import WelcomeScreen from "./components/WelcomeScreen"; // ✅ new component

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'aos/dist/aos.css';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 4000); // auto-hide after 4 seconds
    return () => clearTimeout(timer);
  }, []);

  if (showWelcome) return <WelcomeScreen onSkip={() => setShowWelcome(false)} />;

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Programs />
              <Franchise />
              <Training />
              <Gallery />
              <DemoAndContact />
              <Footer />
              <WhatsAppButton />
            </>
          } />
          <Route path="/about-us" element={<><AboutUs /><Footer /><WhatsAppButton /></>} />
          <Route path="/programs" element={<><ProgramsPage /><Footer /><WhatsAppButton /></>} />
          <Route path="/gallery" element={<><GalleryPage /><Footer /><WhatsAppButton /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
