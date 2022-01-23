import { Routes, Route } from "react-router-dom";

import NavList from "../NavList";
import Home from "../Home";
import About from "../About";

import './App.css';

function App() {
  return (
    <div className="App">
      <NavList />
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;