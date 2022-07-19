import axios from "axios";
import React, { useEffect, useState } from "react";
import "../css/search.css";
import loadingGif from "../assets/loading.gif";

import { useNavigate } from "react-router-dom";

const Search = ({ details, setDetails, setShowNav }) => {
  const navigate = useNavigate();
  const [getData, setGetData] = useState({});
  const [query, setQuery] = useState({
    name: "",
    meal: "breakfast",
  });

  const [show, setShow] = useState(false);

  const getResponse = async () => {
    try {
      const res = await axios(
        `https://api.edamam.com/search?q=${query.name.toLowerCase()}&app_id=83a18932&app_key=acaeb333e1b2e936d4208d428362e805&mealType=${
          query.meal
        }`
      );
      const data = await res.data.hits;
      setGetData(data);
      setShow(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getResponse();
    setShowNav(true);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!show) {
    return (
      <div>
        <img src={loadingGif} alt="loading" />
      </div>
    );
  }

  const handleChange = (e) => {
    setQuery({ ...query, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!query.name) {
      return false;
    }
    getResponse();

    setQuery({ name: "" });
  };

  return (
    <div className="text-center my-5 bg-light">
      <div className=" d-flex justify-content-center my-4">
        <form
          className="row row-cols-lg-auto g-3 align-items-center"
          onSubmit={handleSubmit}
        >
          <div className="col-12">
            <label
              className="visually-hidden"
              htmlFor="inlineFormInputGroupUsername"
            >
              Username
            </label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Recipe"
                value={query.name}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>

          <div className="col-12">
            <select
              className="form-select"
              id="meal"
              name="meal"
              onChange={handleChange}
            >
              <option value="breakfast">breakfast</option>
              <option value="brunch">brunch</option>
              <option value="lunch/dinner">lunch/dinner</option>
              <option value="snack">snack</option>
              <option value="teatime">teatime</option>
            </select>
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="test container row mx-auto">
        {getData.map((item, index) => {
          return (
            <div key={index} className="card col-md-4 col-sm-6 col-12  mx-auto">
              <img src={item.recipe.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{item.recipe.label}</h5>

                <button
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate(`/home/list`, { state: item })}
                >
                  Details
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <button onClick={() => navigate("/")} className="btn btn-success me-2">
          Home
        </button>
        <button onClick={() => navigate(-1)} className="btn btn-warning">
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Search;
