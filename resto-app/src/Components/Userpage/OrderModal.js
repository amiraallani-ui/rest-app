import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";

import "./OrderModal.css";
import { connect } from "react-redux";
import {
  DeleteFoodFromOrder,
  UpdateQuantityInOrderApi,
} from "../../Actions/menuAction";

class OrderModalPage extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBModal isOpen={this.props.state} toggle={this.props.toggle}>
          <MDBModalHeader toggle={this.props.toggle}>Panier:</MDBModalHeader>
          <MDBModalBody>
            <div>
              {this.props.order.length == 0 ? (
                <div>
                  <h2>Votre Panier est vide</h2>
                </div>
              ) : (
                this.props.order.map((el) => (
                  <div className="Card">
                    <img src={el.link} className="picture"></img>
                    <h4>{el.title}</h4>

                    <span>{el.price}</span>
                    <button onClick={() => this.props.DeleteOrder(el.id)}>
                      Supprimer
                    </button>
                    <div className="btns">
                      <button
                        onClick={() => {
                          {
                            this.props.UpDateQuantity({
                              id: el.id,
                              quantity: el.quantity + 1,
                              title: el.title,
                              price: el.price,
                              link: el.link,
                            });
                            console.log(`el.quantity ${el.quantity}`);
                          }
                        }}
                      >
                        +
                      </button>
                      <span>{el.quantity}</span>
                      <button
                        onClick={() => {
                          {
                            this.props.UpDateQuantity({
                              id: el.id,
                              quantity: el.quantity - 1,
                              title: el.title,
                              price: el.price,
                              link: el.link,
                            });
                          }
                        }}
                      >
                        -
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.props.toggle}>
              Fermer
            </MDBBtn>
            <MDBBtn color="primary" onClick={this.props.toggle}>
              Enregistrer
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  DeleteOrder: (id) => dispatch(DeleteFoodFromOrder(id)),
  UpDateQuantity: (Food) => dispatch(UpdateQuantityInOrderApi(Food)),
});

export default connect(null, mapDispatchToProps)(OrderModalPage);
