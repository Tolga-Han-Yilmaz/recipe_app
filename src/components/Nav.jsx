import React from "react";
import "../css/nav.css";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar-div navbar navbar-expand-md ">
      <nav className="container navbar">
        <div>
          <h3>
            \ T H Y /{" "}
            {/* <NavLink className="navbar-a" to="/home/search">
              Recipe
            </NavLink> */}
            <Link className="navbar-a" to="/home/search">
              Recipe
            </Link>
          </h3>
        </div>
        <div>
          <ul className="navbar-ul d-flex">
            {/* <NavLink
              to="/home/about"
              style={{ fontSize: "2.5rem" }}
              className="me-3 display-5 navbar-ul-li nav-link"
            >
              About
            </NavLink> */}
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
            {/* <NavLink
              to="/login"
              className="display-5 navbar-ul-li nav-link"
              style={{ fontSize: "2.5rem" }}
            >
              Logout
            </NavLink> */}
            <Link
              to="/login"
              className="display-5 navbar-ul-li nav-link"
              style={{ fontSize: "2.5rem" }}
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
