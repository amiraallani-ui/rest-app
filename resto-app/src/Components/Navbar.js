import React, { Component } from "react";
import logo from "../images/vegan.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
export default class Nav extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="logo">
          <img src={logo}></img>
          <h1 className="title">Food</h1>
        </div>
        <div className="list">
          <Link to="/Register">
            {" "}
            <li className="List">S'inscrire</li>
          </Link>

          <li>/</li>
          <Link to="/Login">
            {" "}
            <li className="List">Se connecter</li>
          </Link>
        </div>
      </div>
    );
  }
}
