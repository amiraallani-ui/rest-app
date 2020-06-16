import React, { Component } from "react";
import logo from "../../images/vegan.png";
import "./Register.css";
import { addUserToApi } from "../../Actions/menuAction";

import { connect } from "react-redux";
class Register extends Component {
  state = {
    newemail: "",
    newpassword: "",
  };
  handleEmailChange = (e) => {
    this.setState({ newemail: e.target.value });
    console.log(this.state.newemail);
  };
  handlePasswordChange = (e) => {
    this.setState({ newpassword: e.target.value });
    console.log(this.state.newpassword);
  };

  render() {
    return (
      <div className="signup-page">
        <div className="LOGO">
          <h2>
            S'inscrie à<img src={logo} className="Vegan-logo"></img>
            Food
          </h2>
        </div>
        <div className="signup">
          <label for="email"> E-mail</label>
          <input
            type="email"
            id="email"
            onChange={this.handleEmailChange}
          ></input>
          <label for="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            onChange={this.handlePasswordChange}
          ></input>
          <button
            onClick={() => {
              this.props.AddUser({
                email: this.state.newemail,
                password: this.state.newpassword,
                role: "User",
              });
              alert("Bienvnue à VeganFood");
            }}
          >
            Inscription
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  AddUser: (user) => dispatch(addUserToApi(user)),
});

export default connect(null, mapDispatchToProps)(Register);
