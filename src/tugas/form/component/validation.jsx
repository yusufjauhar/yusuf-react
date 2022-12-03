import React from "react";
import * as validator from "validatorjs";
const input = ({ label, type, name, onChange }) => {
  return (
    <div>
      <label>
        <br />
        {label} : <input type={type} name={name} onChange={(e) => onChange(e.target.value)} />
        <br />
      </label>
    </div>
  );
};

export default class Validation extends React.Component {
  state = {
    username: "",
    email: "",
    address: "",
    password: "",
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    // };

    const { username, email, address, password } = this.state;

    // if (Email.lenght === 0) {
    //   alert ('Email tidak boleh kosong')
    // }

    let data = { username, email, address, password };

    let rules = {
      username: "required",
      email: "required|email",
      address: "required",
      password: "min:8|required",
    };

    let validation = new validator(data, rules);

    validation.passes();
    alert(validation.errors.get("username") + validation.errors.get("email") + validation.errors.get("address") + validation.errors.get("password"));
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
          <input
            type="text"
            name="username"
            label="Username"
            onChange={(value) => {
              this.setState({ username: value.target.value });
            }}
          />{" "}
          <br />
          Email <br />
          <input
            type="text"
            name="email"
            label="Email"
            onChange={(value) => {
              this.setState({ email: value.target.value });
            }}
          />{" "}
          <br />
          Address <br />
          <input
            type="text"
            name="address"
            label="Address"
            onChange={(value) => {
              this.setState({ address: value.target.value });
            }}
          />{" "}
          <br />
          Password <br />
          <input
            type="Password"
            name="password"
            label="Password"
            onChange={(value) => {
              this.setState({ password: value.target.value });
            }}
          />
          <br />
          <br />
          <button>Register</button>
        </form>
      </div>
    );
  }
}
