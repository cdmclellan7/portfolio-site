import { Routes, Route } from "react-router-dom";

import NavList from "../NavList";
import Home from "../Home";
import About from "../About";
import Contact from "../Contact";
import Projects from "../Projects";

import './App.css';

function App() {
  return (
    <div className="App">
      <NavList />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;