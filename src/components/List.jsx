import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const List = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const data = location.state;

  const Nutrients = Object.values(data.recipe.totalNutrients);

  return (
    <div className="container  text-center my-5 ">
      <div className="container row border border-dark p-3 ">
        <h1 className="text-center">{data.recipe.label}</h1>

        <div className="col-lg-4  col-12">
          <h3>Ingredient Lines</h3>
          <ol>
            {data.recipe.ingredientLines.map((ing, i) => {
              return <li key={i}>{ing}</li>;
            })}
          </ol>
        </div>
        <div className="col-lg-4  col-12">
          <img src={data.recipe.image} alt="" />
        </div>
        <div className="col-lg-4  col-12">
          <h3>Total Nutrients</h3>
          <ol>
            {Nutrients.map((nut, i) => {
              return (
                <li key={i}>
                  <span>{nut.label}</span>
                  <span>{Math.round(nut.quantity)}</span>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
      <div className="text-center my-3">
        <button
          onClick={() => navigate("/home")}
          className="btn btn-success me-2"
        >
          Home
        </button>
        <button onClick={() => navigate(-1)} className="btn btn-warning">
          Go Back
        </button>
      </div>
    </div>
  );
};

export default List;
