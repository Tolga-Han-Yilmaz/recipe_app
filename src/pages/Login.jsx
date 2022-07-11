import { useEffect, useState } from "react";
import data from "../data";

const Login = () => {
  const [form, setForm] = useState({
    name: "",
    password: "",
  });
  const [users, setUsers] = useState(data);

  const [login, setLogin] = useState({
    name: "",
    password: "",
  });

  const handleChangeSave = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmitSave = (e) => {
    e.preventDefault();

    if (!form.name || !form.password) {
      return false;
    } else {
      let id = Math.floor(Math.random() * 1000);
      setUsers([
        ...users,
        { id: id, name: form.name, password: form.password },
      ]);
    }
    setForm({
      name: "",
      password: "",
    });
  };

  const handleChangeLogin = (e) => {
    setForm({ ...login, [e.target.id]: e.target.value });
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    const user = users.map((user) => user);
    if (!login.name || !login.password) {
      return false;
    }
    if (user.name === login.name && user.password === login.password) {
      return true;
    } else {
      return false;
    }
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
        <form onSubmit={handleSubmitSave}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="USERNAME"
              value={form.name}
              onChange={(e) => handleChangeSave(e)}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={form.password}
              placeholder="PASSWORD"
              onChange={(e) => handleChangeSave(e)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            SIGN UP
          </button>
        </form>
        <form onSubmit={handleSubmitLogin}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="USERNAME"
              value={login.name}
              onChange={(e) => handleChangeLogin(e)}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="PASSWORD"
              value={login.password}
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
