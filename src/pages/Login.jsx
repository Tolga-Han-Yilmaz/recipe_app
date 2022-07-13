import { useEffect, useState } from "react";
// import data from "../data";

const Login = ({ data }) => {
  const [users, setUsers] = useState(data);

  const [login, setLogin] = useState({
    namelogin: "",
    passwordlogin: "",
  });

  const handleChangeLogin = (e) => {
    // setForm({ ...login, [e.target.id]: e.target.value });
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    const user = users.map((user) => user);
    if (!login.namelogin || !login.passwordlogin) {
      return false;
    }
    if (
      user.name === login.namelogin &&
      user.password === login.passwordlogin
    ) {
      console.log("doğru giriş");
    } else {
      return false;
    }
    setLogin({
      namelogin: "",
      passwordlogin: "",
    });
  };
  useEffect(() => {
    console.log(users);

    console.log(login);
  }, [users, login]);

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
