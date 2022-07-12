import React, { useEffect, useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const Entry = () => {
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
      <Login data={data} />
      <Signup addData={setData} data={data} />
    </div>
  );
};

export default Entry;
