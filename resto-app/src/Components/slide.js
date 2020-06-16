import React, { Component } from "react";
import "./slide.css";
import Fade from "react-reveal/Fade";
export default class Slide extends Component {
  render() {
    return (
      <div className="Container">
        <Fade top>
          <p className="paragraphe">100% Vegan & 100% Gourmand</p>
        </Fade>
      </div>
    );
  }
}
