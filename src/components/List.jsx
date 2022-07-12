import React, { useState } from "react";

const List = ({ details, getData }) => {
  console.log(getData[0].recipe);
  console.log(getData);
  const [recipe, setRecipe] = useState([]);
  console.log(details);

  const { label, image } = getData[0].recipe;
  console.log(label);
  console.log(image);

  return <div>{}</div>;
};

export default List;
