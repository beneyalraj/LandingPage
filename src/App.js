import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Products from "./Components/Products";
import WhyUs from "./Components/WhyUs";
import Youtube from "./Components/Youtube";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
      <WhyUs/>
      <Youtube/>
      <Footer/>
    </div>
  );
}

export default App;
