import React, { Component } from "react";

const RecipesView = props => {
  const { rec, onClick, addToBag } = props;
  return (
    <div className="recipes">
      <img
        className="recipes-image"
        src={rec.image}
        onClick={() => {
          onClick(rec);
        }}
        alt="img"
      />
      <div className="recipes-desc">
        <div className="recipes-subdesc">
          <p className="desc-text">{rec.name}</p>
          <p className="desc-text">{rec.price}</p>
        </div>
        <div className="recipes-button">
          <button className="bag-button" type="button" onClick={addToBag}>
            ADD TO BAG
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipesView;
