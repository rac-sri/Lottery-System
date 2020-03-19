import React, { Component } from "react";
import web3 from "./web3";
import "./index.css";
import ReactDOM from "react-dom";

class App extends Component {
  render() {
    console.log(web3.version);
    return <h1>App</h1>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
