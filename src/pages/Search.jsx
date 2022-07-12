import axios from "axios";
import React, { useEffect, useState } from "react";
import "../css/search.css";
import loadingGif from "../assets/loading.gif";
import List from "../components/List";
import { Link, useNavigate } from "react-router-dom";

//const url = `https://api.edamam.com/search?q=pizza&app_id=83a18932&app_key=acaeb333e1b2e936d4208d428362e805&mealType=breakfast`;
// const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`
const Search = ({ details, setDetails }) => {
  const navigate = useNavigate();
  const [getData, setGetData] = useState({});
  const [query, setQuery] = useState({
    name: "",
    meal: "breakfast",
  });
  // const [meal, setMeal] = useState("breakfast");
  const [show, setShow] = useState(false);
  //   const url = `https://api.edamam.com/search?q=${query}&app_id=83a18932&app_key=acaeb333e1b2e936d4208d428362e805&mealType=${meal}`;

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
  console.log(query);

  const handleDetails = async (e) => {
    console.log(e.target.parentElement.firstChild.innerText);

    const b = getData.filter(
      (item) =>
        item.recipe.label === e.target.parentElement.firstChild.innerText
    );

    await setDetails({
      ...details,
      b,
    });
    // await navigate("/list", { replace: true });
  };
  console.log(details);

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
      {/* <List getData={getData} /> */}
      <div className="test container row mx-auto">
        {getData.map((item, index) => {
          return (
            <div key={index} className="card col-md-4 col-sm-6 col-12  mx-auto">
              <img src={item.recipe.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{item.recipe.label}</h5>

                {/* <Link
                  to=""
                  className="btn btn-outline-danger w-50"
                  onClick={handleDetails}
                >
                  Details
                </Link> */}
                <button
                  style={{ cursor: "pointer" }}
                  onClick={(e) => handleDetails(e)}
                >
                  View More
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <List getData={getData} setGetData={setGetData} />
    </div>
  );
};

export default Search;
