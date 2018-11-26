import React, { Component } from "react";
import Total from "./Total";

let sum;

class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: "",
      nuberAsIntger: [],
      result: [],
      symbol: ""
    };

    this.handleClickNum = this.handleClickNum.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClickNum = e => {
    //getting the clicke button
    let value = e.target.value;
    //the element we display out of
    //let output = document.getElementById("display");

    //what ever num is clicked is added to state
    this.setState({
      number: this.state.number + value
    });
  };

  handleClick = e => {
    let symbol = e.target.value;
    //console.log(`symbol ${symbol} clicked`);

    // convert this.state.number to int
    let numberInt = parseInt(this.state.number);

    //sum of results array
    sum = this.state.result.reduce((acc, currVal) => {
      return acc + currVal;
    }, 0);

    // when "+" is clicked push value to array
    if (symbol === "+" || symbol === "=") {
      this.setState({
        //result: [...this.state.result, sum],
        result: [...this.state.result, numberInt],
        number: []
      });

      /*
      let sum = this.state.result.reduce((acc, currVal) => {
        return acc + currVal;
      }, 0);

      console.log(`my total is ${sum}`);
      */
    } else if (symbol === "c") {
      this.setState({
        result: [],
        number: []
      });
      sum = 0;
    }
  };
  render() {
    /*
    let sum = this.state.result.reduce((acc, currVal) => {
      return acc + currVal;
    }, 0);
    */
    /*
    this.setState({
      result: [...this.state.result, sum]
    });
    */

    //console.log(`my total is ${sum}`);
    return (
      <div className="container">
        <p id="display">{sum}</p>

        <input
          onClick={this.handleClickNum}
          type="button"
          value="7"
          className="btn btn-dark"
        />
        <input
          onClick={this.handleClickNum}
          type="button"
          value="8"
          className="btn btn-dark"
        />
        <input
          onClick={this.handleClickNum}
          type="button"
          value="9"
          className="btn btn-dark"
        />
        <input
          onClick={this.handleClick}
          type="button"
          value="x"
          className="btn btn-light"
        />
        <input
          onClick={this.handleClick}
          type="button"
          value="÷"
          className="btn btn-light"
        />
        <br />
        <input
          onClick={this.handleClickNum}
          type="button"
          value="4"
          className="btn btn-dark"
        />
        <input
          onClick={this.handleClickNum}
          type="button"
          value="5"
          className="btn btn-dark"
        />
        <input
          onClick={this.handleClickNum}
          type="button"
          value="6"
          className="btn btn-dark"
        />
        <input
          onClick={this.handleClick}
          type="button"
          value="+"
          className="btn btn-light"
        />
        <input
          onClick={this.handleClick}
          type="button"
          value="-"
          className="btn btn-light"
        />

        <br />
        <input
          onClick={this.handleClickNum}
          type="button"
          value="1"
          className="btn btn-dark"
        />
        <input
          onClick={this.handleClickNum}
          type="button"
          value="2"
          className="btn btn-dark"
        />
        <input
          onClick={this.handleClickNum}
          type="button"
          value="3"
          className="btn btn-dark"
        />
        <input
          onClick={this.handleClick}
          type="button"
          value="("
          className="btn btn-light"
        />
        <input
          onClick={this.handleClick}
          type="button"
          value=")"
          className="btn btn-light"
        />
        <br />
        <input
          onClick={this.handleClickNum}
          type="button"
          value="0"
          className="btn btn-dark"
        />
        <input
          onClick={this.handleClick}
          type="button"
          value="c"
          className="btn btn-danger"
        />
        <input
          onClick={this.handleClick}
          type="button"
          value=". "
          className="btn btn-dark"
        />
        <input
          onClick={this.handleClick}
          type="button"
          value="="
          className="btn btn-light"
        />
      </div>
    );
  }
}

export default Test;

/* previous version */
/*
    //when a bnt-dark is clicked store the value in state
    this.setState({
      value: this.state.value + value
    });

    //convert this.state.value to int
    let valueInt = parseInt(this.state.value);
    //console.log(`the state is ${valueInt}`);
    */
/*
    if (value === "=") {
      //move last digit to state
      this.setState({
        result: [...this.state.result, valueInt]
      });
      console.log(`state is ${this.state.result}`);
      let sum = this.state.result.reduce((acc, currVal) => {
        return acc + currVal;
      }, 0);

      console.log(`my total is ${sum}`);
    }
    */
/*
    switch (value) {
      case "+":
        //console.log(`${value} was clicked`);

        this.setState({
          result: [...this.state.result, valueInt]
        });

        //output.innerHTML = `${this.state.value} ${value}`;
        //console.log(this.state.result);

        break;
      case "x":
        //console.log(`${value} was clicked`);
        break;
      case "÷":
        //console.log(`${value} was clicked`);
        break;

      case "-":
        //console.log(`${value} was clicked`);
        break;
      case "c":
        //console.log(`${value} was clicked`);
        this.setState({
          value: "",
          valueAsIntger: [],
          result: []
        });
        break;
      case ". ":
        //console.log(`${value} was clicked`);
        break;
      /* 
      case "=":
        //console.log(`${value} was clicked`);
        //testing for addition only
        break;
       
      default:
        break;
    }
    */
