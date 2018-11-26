import React, { Component } from "react";

class Result extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      result: []
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = e => {
    //getting the clicke button
    let value = e.target.value;
    //the element we display out of
    let output = document.getElementById("display");

    //when a bnt-dark is clicked store the value in state
    this.setState({
      value: this.state.value + value
    });

    switch (value) {
      case "7":
        //console.log(`${value} was clicked`);
        //output.innerHTML = `${value}`;
        break;
      case "8":
        //console.log(`${value} was clicked`);
        break;
      case "9":
        //console.log(`${value} was clicked`);
        break;
      case "4":
        //console.log(`${value} was clicked`);
        break;
      case "5":
        //console.log(`${value} was clicked`);
        break;
      case "6":
        //console.log(`${value} was clicked`);
        break;
      case "1":
        //console.log(`${value} was clicked`);
        break;
      case "2":
        //console.log(`${value} was clicked`);
        break;
      case "3":
        //console.log(`${value} was clicked`);
        break;
      case "x":
        //console.log(`${value} was clicked`);
        break;
      case "÷":
        //console.log(`${value} was clicked`);
        break;
      case "+":
        //console.log(`${value} was clicked`);
        //this.setState({
        //  result: [...this.state.result, this.state.value]
        //});
        //output.innerHTML = `${this.state.value} ${value}`;
        //console.log(this.state.result);
        break;
      case "-":
        //console.log(`${value} was clicked`);
        break;
      case "(":
        //console.log(`${value} was clicked`);
        break;
      case ")":
        //console.log(`${value} was clicked`);
        break;

      case "0":
        //console.log(`${value} was clicked`);
        break;
      case "c":
        //console.log(`${value} was clicked`);
        this.setState({
          value: "",
          result: []
        });
        break;
      case ". ":
        //console.log(`${value} was clicked`);
        break;
      case "=":
        //console.log(`${value} was clicked`);
        break;
      default:
        break;
    }
  };
  render() {
    return (
      <div className="container">
        <label id="display">{this.state.value}</label>
        <br />
        <input
          onClick={this.handleClick}
          type="button"
          value="7"
          className="btn btn-dark"
        />
        <input
          onClick={this.handleClick}
          type="button"
          value="8"
          className="btn btn-dark"
        />
        <input
          onClick={this.handleClick}
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
          onClick={this.handleClick}
          type="button"
          value="4"
          className="btn btn-dark"
        />
        <input
          onClick={this.handleClick}
          type="button"
          value="5"
          className="btn btn-dark"
        />
        <input
          onClick={this.handleClick}
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
          onClick={this.handleClick}
          type="button"
          value="1"
          className="btn btn-dark"
        />
        <input
          onClick={this.handleClick}
          type="button"
          value="2"
          className="btn btn-dark"
        />
        <input
          onClick={this.handleClick}
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
          onClick={this.handleClick}
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

export default Result;
