import React from "react";
import * as Validator from "validatorjs";
const input = ({ label, type, name, onChange }) => {
  return (
    <div>
      <label> {label} : </label>
      <br />
      <input type={type} name={name} onChange={(e) => onChange(e.target.value)} />
      <br />
    </div>
  );
};

export default class Validation extends React.Component {
  State = {
    username: "",
    email: "",
    password: "",
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { Username, Email, Password } = this.State;

    let data = { Username, Email, Password };

    let rules = {
      Username: "required",
      Email: "required|email",
      Password: "min:8|required",
    };

    let Validation = new Validator(data, rules);
    Validation.passes();
    console.log(Validation.errors.all());
  };
  render() {
    const style = {
      width: "400px",
      margin: "100px auto 0",
      border: "1px solid black",
      padding: "30px",
    };

    return (
      <div style={style}>
        <form onSubmit={this.handleSubmit}>
          <b>Register page</b>
          <br />
          <br />
          Username <br />
          <input type="text" name="Username" label="Username" onChange={(value) => this.setState({ Username: value })} /> <br />
          Email <br />
          <input type="text" name="Email" label="Email" onChange={(value) => this.setState({ Email: value })} /> <br />
          Password <br />
          <input type="Password" name="Password" label="Password" onChange={(value) => this.setState({ Password: value })} />
          <br />
          <br />
          <button>Register</button>
        </form>
      </div>
    );
  }
}
