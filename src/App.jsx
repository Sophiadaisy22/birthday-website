import { useState } from "react";

import "./App.css";

import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Letters from "./components/Letters/Letters";
import MemoryGallery from "./Components/MemoryGallery/MemoryGallery";
import FinalSurprise from "./Components/FinalSurprise/FinalSurprise";
import BackToTop from "./Components/BackToTop/BackToTop";
import Footer from "./Components/Footer/Footer";

function App() {

  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro ? (
        <Intro onFinish={() => setShowIntro(false)} />
      ) : (
        <>
          <Navbar />
          <Hero />
          <About />
          <Letters />
          <MemoryGallery/>
          <FinalSurprise/>
          <BackToTop/>
          <Footer/>
        </>
      )}
    </>
  );
}

export default App;