import React from "react";
import "../css/nav.css";
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";

const Nav = ({ setShowNav }) => {
  return (
    <div className="navbar-div navbar navbar-expand-md ">
      <nav className="container navbar">
        <div>
          <h3>
            \ T H Y /{" "}
            <Link className="navbar-a" to="/home/search">
              Recipe
            </Link>
          </h3>
        </div>
        <div>
          <ul className="navbar-ul d-flex">
            <Link
              to="/home/about"
              style={{ fontSize: "2.5rem" }}
              className="me-3 display-5 navbar-ul-li nav-link"
            >
              About
            </Link>
            <li
              style={{ fontSize: "2.5rem" }}
              className="me-3 display-5 navbar-ul-li nav-link"
            >
              <a
                style={{ textDecoration: "none", color: "black" }}
                href="https://github.com/Tolga-Han-Yilmaz"
              >
                Github
              </a>
            </li>

            <Link
              to="/"
              className="display-5 navbar-ul-li nav-link"
              style={{ fontSize: "2.5rem" }}
              onClick={() => setShowNav(false)}
            >
              Logout
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
