import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const List = ({ details, setShowNav, item }) => {
  // console.log(details);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(details);
  setShowNav(true);
  console.log(item);
  // const {
  //   calories,
  //   totalWeight,
  //   label: mainlabel,
  //   totalNutrients: {
  //     CA: { label: calabel, quantity: caquantity },
  //     CHOCDF: { label: cholabel, quantity: choquantity },
  //     CHOLE: { label: chlabel, quantity: chquantity },
  //     ENERC_KCAL: { label: enlabel, quantity: enquantity },
  //   },
  //   digest,
  //   images: {
  //     REGULAR: { url },
  //   },
  //   ingredientLines,
  // } = location.state;
  const deneme = location.state;
  console.log(deneme);

  return (
    <div>
      <div>{deneme.recipe.calories}</div>
      <div>
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
