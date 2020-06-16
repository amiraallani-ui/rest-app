import React, { Component } from "react";
import "./footer.css";
import icon from "../images/logo.png";
export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <img src={icon} className="icon"></img>
      </div>
    );
  }
}
