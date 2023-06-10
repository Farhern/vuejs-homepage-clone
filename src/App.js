import React from "react";
import { Routes, Route  } from 'react-router-dom';
import Navbar from "./components/Navbar";
import SignIn from "./pages/SignIn";
import Products from "./pages/Products";

import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
       <Route path="/signin" element={<SignIn />} />
       <Route path="/products" element={<Products />} />
      </Routes>
      </>
  );
}

export default App;
