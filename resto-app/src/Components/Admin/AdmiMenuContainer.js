import React, { Component } from "react";
import { connect } from "react-redux";
import { getMenuFromApi, DeleteFoodInApi } from "../../Actions/menuAction";
import "./AdminMenuContainer.css";
import AdminNav from "./AdminNavbar";
import ModalPage from "./EditModal";

class ADMINMENUContainer extends Component {
  state = {
    modal: false,
    el: "",
  };

  toggleMod = (el) => {
    this.setState({
      modal: !this.state.modal,
      el: el,
    });

    console.log(el);
  };
  componentDidMount() {
    this.props.GetMenu();
  }
  render() {
    return (
      <div>
        <AdminNav />
        <ModalPage
          modal={this.state.modal}
          toggle={this.toggleMod}
          el={this.state.el}
        />

        <div className="Container-Card">
          {this.props.Menu.map((el, i) => (
            <div className="Card">
              <img src={el.link} className="picture"></img>
              <h4>{el.title}</h4>
              <span>{el.price}</span>
              <div className="footer-Card">
                <button
                  onClick={() => {
                    this.props.DeleteFood(this.props.Menu[i].id);
                  }}
                  className="Delete-btn"
                >
                  Supprimer
                </button>
                <button onClick={() => this.toggleMod(el)}>Modifier</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { Menu: state.Menu };
};

const mapDispatchToProps = (dispatch) => ({
  GetMenu: () => dispatch(getMenuFromApi()),
  DeleteFood: (id) => dispatch(DeleteFoodInApi(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ADMINMENUContainer);
