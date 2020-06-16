import React, { Component } from "react";
import Nav from "./Navbar";
import Slide from "./slide";
import Container from "./container";
import Slide2 from "./slide2";
import Footer from "./footer.js";

export default class Acceuil extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Container />
        <Slide />
        <Slide2 />
        <Footer />
      </div>
    );
  }
}
