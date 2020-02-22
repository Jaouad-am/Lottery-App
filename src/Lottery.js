import React, { Component } from "react";

class Lottery extends Component {
  static defaultProps = {
    title: "Lotto",
    maxBalls: 6,
    maxNum: 40,
  };
  constructor(props) {
    super(props);
    this.state = { nums: [] };
  }
  draw() {}
  handleClick() {
    this.draw();
  }
  render() {
    return (
      <section className="Lottery">
        <h1>{this.props.title}</h1>
        <div>Balls</div>
        <button onClick={this.handleClick}>Draw</button>
      </section>
    );
  }
}
export default Lottery;
