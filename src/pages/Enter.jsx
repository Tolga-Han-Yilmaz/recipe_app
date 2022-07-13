import React, { useEffect, useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import { Link, Outlet, NavLink } from "react-router-dom";

const Enter = () => {
  const [data, setData] = useState([
    {
      name: "test",
      password: "test",
    },
    {
      name: "test1",
      password: "test1",
    },
    {
      name: "test2",
      password: "test2",
    },
  ]);
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div>
      <div>
        <Login data={data} />
        <Signup addData={setData} data={data} />
      </div>
      <div>
        <NavLink className="btn btn-warning w-50" to="/signup">
          Sign-Up
        </NavLink>
        <NavLink className="btn btn-success w-50" to="/login">
          Login
        </NavLink>

        <Outlet />
      </div>
    </div>
  );
};

export default Enter;
