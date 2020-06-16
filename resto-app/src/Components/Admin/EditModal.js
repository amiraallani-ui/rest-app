import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";
import { UpDateFoodInAPI } from "../../Actions/menuAction";
import { connect } from "react-redux";
import "./EditModal.css";

class ModalPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      link: this.props.el.link,
      title: this.props.el.title,
      price: this.props.el.price,
    };
  }

  render() {
    console.log(this.props.el);

    return (
      <MDBContainer>
        <MDBModal isOpen={this.props.modal} toggle={this.props.toggle}>
          <MDBModalHeader toggle={this.props.toggle}>
            Modification
          </MDBModalHeader>
          <MDBModalBody>
            <div className="form">
              <label for="Food-picture">Image:</label>
              <input
                id="Food-picture"
                onChange={(e) =>
                  this.setState({
                    link: e.target.value,
                  })
                }
                defaultValue={this.props.el.link}
              ></input>

              <label for="Food-name">titre:</label>
              <input
                id="Food-name"
                onChange={(e) =>
                  this.setState({
                    title: e.target.value,
                  })
                }
                defaultValue={this.props.el.title}
              ></input>

              <label for="Food-price">Prix:</label>
              <input
                id="Food-price"
                onChange={(e) =>
                  this.setState({
                    price: e.target.value,
                  })
                }
                defaultValue={this.props.el.price}
              ></input>
            </div>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={() => this.props.toggle()}>
              Annuler
            </MDBBtn>
            <MDBBtn
              color="primary"
              onClick={() =>
                this.props.UpdateFood({
                  id: this.props.el.id,
                  link: this.state.link,
                  title: this.state.title,
                  price: this.state.price,
                })
              }
            >
              Enregistrer
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}
const mapStateToProps = (state) => {
  return { Menu: state.Menu };
};

const mapDispatchToProps = (dispatch) => ({
  UpdateFood: (Food) => dispatch(UpDateFoodInAPI(Food)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalPage);
