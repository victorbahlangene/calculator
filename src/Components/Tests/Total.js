import React, { Component } from "react";

class Total extends Component {
  render() {
    let sum = this.props.result.reduce((acc, currVal) => {
      return acc + currVal;
    }, 0);

    console.log(`my total is ${sum}`);

    return (
      <div>
        <p>{sum}</p>
      </div>
    );
  }
}

export default Total;
