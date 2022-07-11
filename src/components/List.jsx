import React, { useState } from "react";

const List = ({ getData }) => {
  console.log(getData[0].recipe);
  const [recipe, setRecipe] = useState([]);

  const { label, image } = getData[0].recipe;
  console.log(label);
  console.log(image);

  return (
    <div>
      {/* {getData.map((data) => {
        return <p>{data[0]}</p>;
      })} */}
      {/* {getData.recipe.image} */}
      <img src={image} alt="" />
    </div>
  );
};

export default List;
