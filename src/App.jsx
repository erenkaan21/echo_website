import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Story from "./pages/Story";
import CastCrew from "./pages/CastCrew";
import Gallery from "./pages/Gallery";
import Awards from "./pages/Awards";
import Contact from "./pages/Contact";
import Background from "./components/Background";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="relative min-h-screen font-sans overflow-x-hidden">
        <Background />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story" element={<Story />} />
          <Route path="/cast-crew" element={<CastCrew />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
