import React, { useEffect } from 'react';
import Navigation from "./components/Navigation"
import Home from "./components/Home"
import WhoImI from "./components/WhoImI"
import Quote from "./components/Quote"
import Github from "./components/Github"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import AOS from 'aos';

function App() {
  useEffect(()=>{
    AOS.init();
  },[]);

  return (
    <React.Fragment>
      <Navigation />
      <Home />
      <WhoImI />
      <Quote />
      <Github />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default App;
