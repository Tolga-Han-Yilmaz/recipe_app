import axios from "axios";
import React, { useEffect, useState } from "react";
import "../css/search.css";
import loadingGif from "../assets/loading.gif";
import List from "../components/List";

// const url = `https://api.edamam.com/search?q=pizza&app_id=83a18932&app_key=acaeb333e1b2e936d4208d428362e805&mealType=breakfast`;
// const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`
const Search = () => {
  const [getData, setGetData] = useState({});
  const [query, setQuery] = useState();
  const [meal, setMeal] = useState("breakfast");
  const [show, setShow] = useState(false);
  //   const url = `https://api.edamam.com/search?q=${query}&app_id=83a18932&app_key=acaeb333e1b2e936d4208d428362e805&mealType=${meal}`;

  const getResponse = async () => {
    try {
      const res = await axios(
        `https://api.edamam.com/search?q=${query}&app_id=83a18932&app_key=acaeb333e1b2e936d4208d428362e805&mealType=${meal}`
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

  const handleChangeInput = (e) => {
    setQuery(e.target.value);
  };

  const handleSelectChange = (e) => {
    setMeal(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(getData);
  };
  //   console.log(getData);

  return (
    <div className="d-flex justify-content-center align-items-center my-5">
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
              id="query"
              placeholder="Recipe"
              value={query}
              onChange={(e) => handleChangeInput(e)}
            />
          </div>
        </div>

        <div className="col-12">
          <select
            className="form-select"
            id="meal"
            onChange={handleSelectChange}
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
      <List getData={getData} />
    </div>
  );
};

export default Search;
