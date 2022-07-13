import { useState } from "react";
// import data from "../data";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    namelogin: "",
    passwordlogin: "",
  });

  const handleChangeLogin = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    if (login.namelogin === "tolga" && login.passwordlogin === "1286") {
      navigate("/home");
    } else {
      alert("username : tolga  password : 1286");
    }
  };

  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <div className="login rounded-circle bg-warning p-5">
        <h1>\ T H Y / RECIPE</h1>

        <form onSubmit={handleSubmitLogin}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              name="namelogin"
              placeholder="USERNAME"
              value={login.namelogin}
              onChange={(e) => handleChangeLogin(e)}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              name="passwordlogin"
              placeholder="PASSWORD"
              value={login.passwordlogin}
              onChange={(e) => handleChangeLogin(e)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
