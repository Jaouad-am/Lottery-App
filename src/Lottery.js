import React, { Component } from "react";
import Ball from "./Ball";
import "./Lottery.css";

class Lottery extends Component {
  static defaultProps = {
    title: "Lotto",
    maxBalls: 6,
    maxNum: 40,
  };
  constructor(props) {
    super(props);
    this.state = { nums: Array.from({ length: this.props.maxBalls }) };
    this.handleClick = this.handleClick.bind(this);
  }
  draw() {
    //drawing random numbers
    this.setState((prevState) => ({
      nums: prevState.nums.map(
        (n) => Math.floor(Math.random() * this.props.maxNum) + 1
      ),
    }));
    //console.log(Math.floor(Math.random() * this.props.maxNum));
  }
  handleClick() {
    this.draw();
  }
  render() {
    return (
      <section className="Lottery">
        <h1>{this.props.title}</h1>
        <div>
          {this.state.nums.map((n) => (
            <Ball num={n} />
          ))}
        </div>
        <button onClick={this.handleClick}>Draw</button>
      </section>
    );
  }
}
export default Lottery;
