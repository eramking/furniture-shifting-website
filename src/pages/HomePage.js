// src/pages/HomePage.js
import React from "react";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { FeatureSection } from "../components/FeatureSection";
import { Footer } from "../components/Footer";
import "../style.css";

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <Footer />
    </>
  );
}

export default HomePage;
