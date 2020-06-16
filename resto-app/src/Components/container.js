import React, { Component } from "react";
import "./container.css";
import yumy from "../images/yummy.png";
export default class Container extends Component {
  render() {
    return (
      <div className="component-container">
        <div className="first-text">
          <p>OFERE DE BIENVENUE</p>
          <img src={yumy} className="emoji"></img>
        </div>
        <p>-20% sur la 1ère commande avec le code BONAPPETIT.</p>
      </div>
    );
  }
}
