import React, { Component } from "react";

class FavouritesView extends Component {
  render() {
    const { fav, onClick, addToBag } = this.props;
    return (
      <div className="favs">
        <img
          className="favs-image"
          src={fav.image}
          onClick={() => {
            onClick(fav);
          }}
          alt="img"
        />
        <div className="recipes-desc">
          <div className="recipes-subdesc">
            <p className="desc-text">{fav.name}</p>
            <p className="desc-text">{fav.price}</p>
          </div>
          <div className="recipes-button">
            <button className="bag-button" type="button" onClick={addToBag}>
              REORDER
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default FavouritesView;
