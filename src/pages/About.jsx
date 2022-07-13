import React from "react";
import coding from "../assets/coding.svg";
import "../css/about.css";

const About = ({ setShowNav }) => {
  setShowNav(true);
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
    </div>
  );
};

export default About;
