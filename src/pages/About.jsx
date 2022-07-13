import React, { useEffect } from "react";
import coding from "../assets/coding.svg";
import "../css/about.css";
import { useNavigate } from "react-router-dom";

const About = ({ setShowNav }) => {
  const navigate = useNavigate();

  useEffect(() => {
    setShowNav(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="about-div text-center">
      <img className="about-img" src={coding} alt="" />
      <h3>About Full Stack Developer Tolga Han YILMAZ</h3>
      <div className="about-div-text">
        <p>I'm Tolga</p>
        <p>I'm currently learning Full-Stack Development Languages</p>
        <p>I've already known Js,ReactJS,HTML,CSS,Bootstrap,SASS,SQL,Python</p>
        <p>Send Email : 06thy40@gmail.com</p>
      </div>
      <div>
        <button
          onClick={() => navigate("/home")}
          className="btn btn-success me-2"
        >
          Home
        </button>
        <button onClick={() => navigate(-1)} className="btn btn-warning">
          Go Back
        </button>
      </div>
    </div>
  );
};

export default About;
