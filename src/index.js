import React, { Component } from "react";
import web3 from "./web3";
import "./index.css";
import ReactDOM from "react-dom";
import lottery from "./lottery";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      manager: "",
      players: [],
      balance: "",
      value: "",
      message: ""
    };
  }
  async componentDidMount() {
    const manager = await lottery.methods.manager().call();
    const players = await lottery.methods.getPlayers().call();
    const balance = await web3.eth.getBalance(lottery.options.address);

    this.setState({ manager, players, balance });
  }

  onSubmit = async event => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();

    this.setState({ message: "Waiting on transaction success..." });
    console.log("sadflkdsk");
    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei(this.state.value, "ether")
    });
    console.log("dsajkfnsd");
    this.setState({ message: "You have been entered" });
  };

  onClick = async event => {
    const accounts = await web3.eth.getAccounts();

    this.setState({ message: "Waiting on transaction success..." });
    await lottery.methods.pickWinner().send({
      from: accounts[0]
    });

    this.setState({ message: "A winner has been picked!" });
  };
  render() {
    return (
      <div>
        <h2>Lottery Contract</h2>
        <p>
          this contract is managed but {this.state.manager}. Thre are currently{" "}
          {this.state.players.length} people entered competing to wine{" "}
          {web3.utils.fromWei(this.state.balance, "ether")}
        </p>

        <hr />

        <form onSubmit={this.onSubmit}>
          <h4>Try your luck?</h4>
          <div>
            <label>Amount of ether to enter</label>
            <input
              value={this.state.value}
              onChange={event => this.setState({ value: event.target.value })}
            />
          </div>
          <button>Enter</button>
        </form>

        <hr />
        <h4>Ready to picj a winner?</h4>
        <button onClick={this.onClick}>Pick a Winner!</button>
        <hr />
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
