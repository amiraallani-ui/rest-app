import React, { Component } from "react";
import logo from "../../images/vegan.png";

import logoPanier from "../../images/panier.png";
import OrderModalPage from "./OrderModal";
import { connect } from "react-redux";
import { getOrderFromApi } from "../../Actions/menuAction";
import "./UserNavbar.css";

class NavUser extends Component {
  state = {
    modal: false,
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
    this.props.GetOrder();
  };
  render() {
    return (
      <div className="Navbar">
        <OrderModalPage
          toggle={this.toggle}
          state={this.state.modal}
          order={this.props.Order}
        />
        <div className="User-Navbar">
          <div className="logo">
            <img src={logo}></img>
            <h1 className="title">Food</h1>
          </div>
          <button
            className="btn-panier"
            onClick={() => {
              this.toggle();
            }}
          >
            <img src={logoPanier} width="40px" height="40px"></img>
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { Order: state.Order };
};

const mapDispatchToProps = (dispatch) => ({
  GetOrder: () => dispatch(getOrderFromApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavUser);
