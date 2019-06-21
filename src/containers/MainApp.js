import React, { Component } from "react";
import FavouritesView from "../components/FavouritesView";
import RecipesView from "../components/RecipesView";
import CategoriesView from "../components/CategoriesView";
import { withRouter } from "react-router-dom";

class MainApp extends Component {
  state = {
    categories: [],
    recipes: [],
    favourites: [],
    selectedCategories: "",
    bagCount: 0
  };

  constructor() {
    super();
    this.onCategorySelect = this.onCategorySelect.bind(this);
    this.onCommoditySelect = this.onCommoditySelect.bind(this);
  }

  componentDidMount() {
    var url = `http://temp.dash.zeta.in/food.php`;
    console.log(url);
    fetch(url)
      .then(response => response.json())
      .then(json => {
        console.log("data", json);
        const favArray = json.recipes.filter(rec => rec.isFavourite === true);
        console.log("data", favArray);
        this.setState({ categories: json.categories });
        this.setState({ recipes: json.recipes });
        this.setState({ favourites: favArray });
      });
  }

  onCommoditySelect(comm) {
    this.props.history.push({
      pathname: "/details",
      state: { detail: comm }
    });
    // this.props.history.push("/details");
  }

  onCategorySelect(name) {
    console.log("selected", name);
    this.setState({ selectedCategories: name });
  }

  addToBag() {
    let { bagCount } = this.state;
    this.setState({ bagCount: bagCount + 1 });
  }

  onSearch() {}

  render() {
    const {
      categories,
      recipes,
      favourites,
      selectedCategories,
      bagCount
    } = this.state;
    const categoriesView = categories.map(cat => (
      <CategoriesView cat={cat} onClick={this.onCategorySelect} />
    ));

    const favView = favourites.map(fav => (
      <FavouritesView
        fav={fav}
        onClick={this.onCommoditySelect}
        addToBag={() => {
          this.addToBag();
        }}
      />
    ));
    const recipesSortedWithCategory = recipes.filter(
      rec => rec.category === selectedCategories
    );
    console.log("sorted", recipesSortedWithCategory);
    const recipeShow =
      recipesSortedWithCategory.length > 0
        ? recipesSortedWithCategory
        : recipes;
    const recipesView = recipeShow.map(rec => (
      <RecipesView
        rec={rec}
        onClick={this.onCommoditySelect}
        addToBag={() => {
          this.addToBag();
        }}
      />
    ));
    return (
      <div className="App">
        <div className="main-header">
          <span>Best Food App</span>
        </div>
        <div className="favourites">
          <div className="favourites-header">
            <div className="favourites-subheader">
              <span className="main-header-text">FAVOURITES</span>
              <span className="sub-header-text">
                Enjoy what you have been ordering!
              </span>
            </div>
            <div className="bag">
              <i
                className="material-icons"
                style={{ fontSize: "25px", width: "25px" }}
              >
                shopping
              </i>
              <span className="notify-badge">{bagCount}</span>
            </div>
          </div>
          <div className="favourite-view">{favView}</div>
        </div>
        <div className="content">
          <div className="search">
            <div className="search-box">
              <input
                className="input-box"
                type="text"
                placeholder="Search for recipes"
                onChange={this.onSearch}
              />
            </div>
            <div className="favourites-header">
              <div className="favourites-subheader">
                <span className="main-header-text">SELECT CATEGORIES</span>
              </div>
              <div className="bag">
                <i
                  className="material-icons"
                  style={{ fontSize: "25px", width: "25px" }}
                >
                  filter-variant
                </i>
              </div>
            </div>
            <div className="categories-view" id="myHeader">
              {categoriesView}
            </div>
            <div className="recipes-view">{recipesView}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(MainApp);
