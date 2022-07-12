import { useState } from "react";
// import data from "../data";
// import { Link, NavLink } from "react-router-dom";

const Signup = ({ data, addData }) => {
  const initialForm = {
    name: "",
    password: "",
  };
  const [form, setForm] = useState(initialForm);
  //   const [users, setUsers] = useState(data);

  const handleChangeSave = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmitSave = (e) => {
    e.preventDefault();

    if (!form.name || !form.password) {
      return false;
    } else {
      //   let id = Math.floor(Math.random() * 1000);
      //   setUsers([
      //     ...users,
      //     { id: id, name: form.name, password: form.password },
      //   ]);
      addData([...data, form]);
      setForm(initialForm);
    }
  };

  //   console.log(users);
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
              name="password"
              value={form.password}
              placeholder="PASSWORD"
              onChange={(e) => handleChangeSave(e)}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            {/* {users && <NavLink to="/login">SIGN UP</NavLink>} */}SignUp
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
