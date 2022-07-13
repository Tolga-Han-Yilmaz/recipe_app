import "./App.css";
import Search from "./pages/Search";
import About from "./pages/About";
import Github from "./pages/Github";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import List from "./components/List";
import NotFound from "./pages/NotFound";
import Signup from "./pages/Signup";
import Enter from "./pages/Enter";
// import AppRouter from "./pages/AppRouter";
import { useState } from "react";
import Nav from "./components/Nav";

function App() {
  const [details, setDetails] = useState();
  const [showNav, setShowNav] = useState(false);

  return (
    <div>
      {showNav && <Nav />}
      <Routes>
        <Route path="/" element={<Enter />}>
          <Route index element={<Signup />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Route>

        <Route path="/home" element={<Home />} />
        <Route
          path="/home/search"
          element={
            <Search
              setDetails={setDetails}
              details={details}
              setShowNav={setShowNav}
            />
          }
        />
        <Route
          path="/home/list"
          element={<List details={details} setShowNav={setShowNav} />}
        />
        <Route path="/home/about" element={<About setShowNav={setShowNav} />} />
        <Route path="/github" element={<Github />} />
        <Route path="*" element={<NotFound setShowNav={setShowNav} />} />
      </Routes>
    </div>
  );
}

export default App;
