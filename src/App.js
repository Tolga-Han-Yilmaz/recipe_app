import "./App.css";
import Search from "./pages/Search";
import About from "./pages/About";
import Github from "./pages/Github";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import List from "./components/List";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/:id" element={<List />} />
        <Route path="/about" element={<About />} />
        <Route path="/github" element={<Github />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
