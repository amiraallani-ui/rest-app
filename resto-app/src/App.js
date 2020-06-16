import { Provider } from "react-redux";
import Store from "./Store";
import { Route, Switch, Redirect } from "react-router-dom";
import Acceuil from "./Components/Acceuil";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/login";
import ADMINMENUContainer from "./Components/Admin/AdmiMenuContainer";
import Userpage from "./Components/Userpage/Userpage";
import React, { Component } from "react";

export default class App extends Component {
  state = {
    loggedIn: "you are not a memebr",
  };
  updateLoggedIn = (type) => {
    var log = this.state.loggedIn;
    if (type === "Admin") {
      log = "Admin";
    } else if (type === "User") {
      log = "User";
    } else log = "you are not a memebr";

    this.setState({ loggedIn: log });
  };
  render() {
    return (
      <Provider store={Store}>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Acceuil}></Route>
            <Route path="/Register" component={Register}></Route>
            <Route
              path="/Login"
              render={() =>
                this.state.loggedIn === "Admin" ? (
                  <Redirect to="/Adminpage" />
                ) : this.state.loggedIn === "User" ? (
                  <Redirect to="/Userpage" />
                ) : (
                  <Login updateLoggedIn={this.updateLoggedIn} />
                )
              }
            ></Route>
            <Route path="/Adminpage" component={ADMINMENUContainer}></Route>
            <Route path="/Userpage" component={Userpage}></Route>
          </Switch>
        </div>
      </Provider>
    );
  }
}
