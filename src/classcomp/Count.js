import React, { Component } from "react";

class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.start
    };
  }
  addOne() {
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
  }
  render() {
    console.log(this.props);
    return (
      <>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.addOne()}>Add One</button>
      </>
    );
  }
}

export default Count;
