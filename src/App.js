import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sponsors from "./components/Sponsors";
import Description from "./components/Description";
import Resources from "./components/Resources";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sponsors />
      <Description />
      <Resources />
      <Footer />
      </>
  );
}

export default App;
