import React, { useEffect } from "react";
// import Nav from "../components/Nav";
import home from "../assets/home.gif";

const Home = ({ setShowNav }) => {
  useEffect(() => {
    setShowNav(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="text-center">
      <h1 className="display-1" style={{ color: "red" }}>
        Welcome
      </h1>
      <img src={home} alt="home" />
    </div>
  );
};

export default Home;
