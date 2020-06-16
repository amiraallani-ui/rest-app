import React, { Component } from "react";
import { connect } from "react-redux";
import { getMenuFromApi, addOrderInApi } from "../../Actions/menuAction";
import "./menuContainer.css";

class MenuContainer extends Component {
  componentDidMount() {
    this.props.GetMenu();
  }
  render() {
    return (
      <div className="Container-Card">
        {this.props.Menu.map((el, i) => (
          <div className="Card">
            <img src={el.link} className="picture"></img>
            <h4>{el.title}</h4>
            <div className="footer-Card">
              <button
                className="btn"
                onClick={() => {
                  this.props.AddOrderFood(el);
                }}
              >
                Ajouter au panier
              </button>
            </div>
            <span>{el.price}</span>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { Menu: state.Menu };
};

const mapDispatchToProps = (dispatch) => ({
  GetMenu: () => dispatch(getMenuFromApi()),
  AddOrderFood: (Food) => dispatch(addOrderInApi(Food)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);
