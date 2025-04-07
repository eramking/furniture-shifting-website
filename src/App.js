// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";       // Your homepage components
import BookingPage from "./pages/BookingPage";
import DashboardPage from "./pages/DashboardPage"; // Your booking page components

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/dashboard" element={<DashboardPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
