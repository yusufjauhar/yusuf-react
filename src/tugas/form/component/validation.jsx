import React from "react";
import * as validator from "validatorjs";
const input = ({ label, type, name, onChange }) => {
  return (
    <div>
      <label>{label} :</label>
      <br />
      <input type={type} name={name} onChange={(e) => onChange(e.target.value)} />
      <br />
    </div>
  );
};

export default class Validation extends React.Component {
  state = {
    Username: "",
    Email: "",
    Password: "",
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { Username, Email, Password } = this.state;

    let data = { Username, Email, Password };

    let rules = {
      Username: "required",
      Email: "required|email",
      Password: "min:8|required",
    };

    let validation = new validator(data, rules);
    validation.passes();
    console.log(validation.errors.all());
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
          <input type="text" name="username" label="Username" onChange={(value) => this.setState({ username: value })} /> <br />
          Email <br />
          <input type="text" name="email" label="Email" onChange={(value) => this.setState({ email: value })} /> <br />
          Password <br />
          <input type="Password" name="password" label="Password" onChange={(value) => this.setState({ password: value })} />
          <br />
          <br />
          <button>Register</button>
        </form>
      </div>
    );
  }
}
