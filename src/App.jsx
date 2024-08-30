// src/App.js
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import HeroComponent from "./components/HeroComponent";
import ScrollToTop from "./components/ScrollToTop";
import USPSection from "./components/USPSection";
import CategoryShowcase from "./components/CategoryShowcase";
import FeaturedProducts from "./components/FeaturedProducts";

// import LandingPage from "./components/LandingPage";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-100">
        <main>
          <Header />
          <HeroComponent />
          <USPSection />
          <FeaturedProducts />
          <CategoryShowcase />
        </main>
      </div>
    </Router>
  );
};

export default App;
