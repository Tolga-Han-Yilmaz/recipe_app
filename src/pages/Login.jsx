import { useState } from "react";

const Login = () => {
  const [form, setForm] = useState();

  const handleChange = (e) => {
    setForm(e.target.value);
  };

  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <div className="login rounded-circle bg-warning p-5">
        <h1>\Tolga/ RECIPE</h1>
        <form>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              placeholder="USERNAME"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="PASSWORD"
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
