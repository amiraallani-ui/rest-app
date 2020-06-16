import React, { Component } from "react";
import logo from "../../images/vegan.png";
import { connect } from "react-redux";
import { GetUsersFromApi } from "../../Actions/menuAction";
class Login extends Component {
  state = {
    email: "",
    password: "",
  };
  componentDidMount = () => {
    this.props.GetUser();
  };
  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };
  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };
  authentication = () => {
    for (var i = 0; i < this.props.user.length; i++) {
      if (
        this.state.email === this.props.user[i].email &&
        this.state.password === this.props.user[i].password &&
        this.props.user[i].role === "Admin"
      ) {
        this.props.updateLoggedIn("Admin");
        return console.log("Admin");
      } else if (
        this.state.email === this.props.user[i].email &&
        this.state.password === this.props.user[i].password &&
        this.props.user[i].role === "User"
      ) {
        this.props.updateLoggedIn("User");
        return console.log("you are User");
      }
    }
    this.props.updateLoggedIn("you are not a memebr");
    return console.log("you are not a memebr");
  };

  render() {
    return (
      <div className="signup-page">
        <div className="LOGO">
          <h2>
            Se connecter à<img src={logo} className="Vegan-logo"></img>
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
          <button onClick={() => this.authentication()}>connexion</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.User };
};

const mapDispatchToProps = (dispatch) => ({
  GetUser: () => dispatch(GetUsersFromApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
