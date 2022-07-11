import React from "react";

const Nav = () => {
  return (
    <div>
      <nav className="container navbar">
        <div>
          <h3>
            \ T H Y / RECIPE <a href="#">Recipe</a>
          </h3>
        </div>
        <div>
          <ul>
            <li>About</li>
            <li>Github</li>
            <li>Logout</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
