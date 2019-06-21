import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Details extends Component {
  state = {
    details: {}
  };
  componentDidMount() {
    this.setState({ details: this.props.location.state.detail });
  }

  render() {
    const { details } = this.state;
    const { history } = this.props;
    console.log("details", details);
    return (
      <div className="App">
        <div className="main-header">
          <span className="details-back" onClick={history.goBack}>
            Back
          </span>
          <span>Best Food App</span>
        </div>
        <div className="content">
          <div className="details">
            <img className="details-image" src={details.image} />
            <div className="recipes-desc">
              <div className="recipes-subdesc">
                <p className="desc-text">{details.name}</p>
                <p className="desc-text">{details.price}</p>
              </div>
              <div className="recipes-button">
                <button className="bag-button" type="button">
                  ADD TO BAG
                </button>
              </div>
            </div>
            <div className="ratings-category">
              <span>Category: {details.category}</span>
              <span>
                {details.rating} Rating, ({details.reviews} Reviews)
              </span>
            </div>
            <div className="details-desc-header">Details</div>
            <div className="details-desc">{details.details}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Details);
