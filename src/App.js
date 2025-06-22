import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Import Navbar
import Home from "./pages/Home"; // Your homepage component
import About from "./pages/About"; // About Us page
import Login from "./pages/Login"; // Login/Signup page
import Quiz from "./pages/Quiz"; // Quiz game page
import Roleplay from "./pages/Roleplay"; // Roleplaying game page
import Puzzle from "./pages/Puzzle"; // Puzzle game page

function App() {
  return (
    <Router>
      <Navbar /> {/* Add Navbar at the top */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/roleplay" element={<Roleplay />} />
        <Route path="/puzzle" element={<Puzzle />} />
      </Routes>
    </Router>
  );
}

export default App;
