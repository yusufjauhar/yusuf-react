import React from "react";
import { Component } from "react";

export default class ContohLifeCycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      baju: "baru",
      data: {},
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          data: json,
        });
      });
  }
  render() {
    console.log("Data : ", this.state.data);
    return (
      <div>
        <h2>{this.state.data.title}</h2>
      </div>
    );
  }
}
