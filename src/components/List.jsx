import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const List = ({ details, setShowNav }) => {
  console.log(details);
  const navigate = useNavigate();
  const location = useLocation();
  setShowNav(true);
  const {
    calories,
    totalWeight,
    label: mainlabel,
    totalNutrients: {
      CA: { label: calabel, quantity: caquantity },
      CHOCDF: { label: cholabel, quantity: choquantity },
      CHOLE: { label: chlabel, quantity: chquantity },
      ENERC_KCAL: { label: enlabel, quantity: enquantity },
    },
    digest,
    images: {
      REGULAR: { url },
    },
    ingredientLines,
  } = location.state;

  return (
    <div>
      <div className="first">
        <h1>{mainlabel}</h1>
        <div></div>
      </div>
      <div>
        <div>
          <h4>Nutrients</h4>
          <p>
            {calabel} : {Math.floor(caquantity)} g
          </p>
          <p>
            {cholabel} : {Math.floor(choquantity)} g
          </p>
          <p>
            {chlabel} : {Math.floor(chquantity)} mg
          </p>
          <p>
            {enlabel} : {Math.floor(enquantity)} kcal
          </p>
          <p>
            <b>Total Weight</b> : {Math.floor(totalWeight)}
          </p>
          <p>
            <b> Calories </b> : {Math.floor(calories)}
          </p>
          <p>
            {digest[0].label} : {Math.floor(digest[0].total)}
          </p>
          <p>
            {digest[2].label} : {Math.floor(digest[2].total)}
          </p>
        </div>
        <div>
          <img src={url} alt="img" />
        </div>
        <div>
          {ingredientLines.map((item) => {
            return (
              <ul>
                <li>{item}</li>
              </ul>
            );
          })}
        </div>
      </div>
      <div className="buttons">
        <button onClick={() => navigate(1)}>Go Forward</button>
        <button primary onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default List;
