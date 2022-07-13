import "./App.css";
import Search from "./pages/Search";
import About from "./pages/About";
import Github from "./pages/Github";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import List from "./components/List";
import NotFound from "./pages/NotFound";

import { useState } from "react";
import Nav from "./components/Nav";

function App() {
  const [showNav, setShowNav] = useState(false);

  return (
    <div>
      {showNav && <Nav setShowNav={setShowNav} />}
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/home" element={<Home setShowNav={setShowNav} />} />
        <Route
          path="/home/search"
          element={<Search setShowNav={setShowNav} />}
        />
        <Route path="/home/list" element={<List setShowNav={setShowNav} />} />
        <Route path="/home/about" element={<About setShowNav={setShowNav} />} />
        <Route path="/github" element={<Github />} />
        <Route path="*" element={<NotFound setShowNav={setShowNav} />} />
      </Routes>
    </div>
  );
}

export default App;
