import React from "react";
import { Link, Outlet } from "react-router-dom";

const Enter = () => {
  return (
    <div>
      <Link className="btn btn-success w-50" to="/login">
        Login
      </Link>
      <Link className="btn btn-warning w-50" to="/signup">
        Sign-Up
      </Link>

      <Outlet />
    </div>
  );
};

export default Enter;
