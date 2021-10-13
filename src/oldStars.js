import React, { Component } from "react";
import Star from "./star";
import { createArray } from "./lib";

export default class OldStarRating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starsSelected: 0

    };
    this.change = this.change.bind(this);
  }

  change(starsSelected,selected) {
      this.setState({ starsSelected });
      console.log({selected});
  }

  render() {    
    const { totalStars } = this.props;
    const { starsSelected } = this.state;

   
    return (
      <div>
        {createArray(totalStars).map((n, i) => (
          <Star
            key={i}
            selected={i < starsSelected}
            onSelect={() => this.change(i + 1)}
          />
        ))}
        <p>
          {starsSelected} of {totalStars} stars
        </p>
      </div>
    );
  }
}


