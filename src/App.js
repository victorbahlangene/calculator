import React, { Component } from "react";
import "./App.css";
import Result from "./Components/Result/Result";
import "bootstrap/dist/css/bootstrap.min.css";
import Test from "./Components/Tests/Test";

class App extends Component {
  render() {
    return (
      <div className="container">
        <br />
        {/* <Result /> */}
        <Test />
      </div>
    );
  }
}

export default App;
