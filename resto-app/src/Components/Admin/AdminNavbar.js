import React, { Component } from "react";
import logo from "../../images/vegan.png";
import ModalExample from "./AddModal";
import "./adminNavbar.css";

export default class AdminNav extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="logo">
          <img src={logo}></img>
          <h1 className="title">Food</h1>
        </div>
        <ModalExample className="add-Modal" />
      </div>
    );
  }
}
