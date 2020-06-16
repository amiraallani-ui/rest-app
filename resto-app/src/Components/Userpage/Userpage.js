import React, { Component } from "react";
import NavUser from "./NavbarUser";
import MenuContainer from "./menuContainer";

export default class Userpage extends Component {
  render() {
    return (
      <div>
        <NavUser />
        <MenuContainer />
      </div>
    );
  }
}
