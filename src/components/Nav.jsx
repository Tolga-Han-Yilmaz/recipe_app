import React from "react";
import "../css/nav.css";

const Nav = () => {
  return (
    <div className="navbar-div">
      <nav className="container navbar">
        <div>
          <h3>
            \ T H Y /{" "}
            <a className="navbar-a" href="#">
              Recipe
            </a>
          </h3>
        </div>
        <div>
          <ul className="navbar-ul d-flex">
            <li className="me-3 display-5 navbar-ul-li">About</li>
            <li className="me-3 display-5 navbar-ul-li">Github</li>
            <li className="display-5 navbar-ul-li">Logout</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
