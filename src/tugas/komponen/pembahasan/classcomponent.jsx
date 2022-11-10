import React from "react";

class classcomponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };
    this.handleplus = this.handleplus.bind(this);
    this.handleminus = this.handleminus.bind(this);
  }
  handleplus() {
    this.setState({ value: this.state.value + 1 });
  }
  handleminus() {
    if (this.state.value > 0) {
      this.setState({ value: this.state.value - 1 });
    }
  }
  render() {
    return (
      <div>
        <h1>komponen ini dibuat dengan class Component</h1>
        <h2>hello {this.props.nama}</h2>
        <button onClick={this.handleminus}>-</button>
        <span> {this.state.value} </span>
        <button onClick={this.handleplus}>+</button>
      </div>
    );
  }
}

export default classcomponent;
