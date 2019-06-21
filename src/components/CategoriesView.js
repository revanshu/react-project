import React, { Component } from "react";

const CategoriesView = props => {
  const { cat, onClick } = props;
  return (
    <div
      className="categories"
      onClick={() => {
        onClick(cat.name);
      }}
    >
      <img className="category-image" src={cat.image} />
      <span>{cat.name}</span>
    </div>
  );
};

export default CategoriesView;
