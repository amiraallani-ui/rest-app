import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
import { addFoodToApi } from "../../Actions/menuAction";
import "./AddModal.css";

const ModalExample = (props) => {
  const { className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const [link, setlink] = useState("");
  const [title, settitle] = useState("");
  const [price, setprice] = useState("");
  const Food = { link, title, price };

  return (
    <div>
      <Button onClick={toggle} className="button-Modal btn-Modal">
        +
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Ajout du produit</ModalHeader>
        <ModalBody>
          <label for="Food-picture">Image:</label>
          <input
            id="Food-picture"
            onChange={(e) => setlink(e.target.value)}
          ></input>
          <label for="Food-name">titre:</label>
          <input
            id="Food-name"
            onChange={(e) => settitle(e.target.value)}
          ></input>
          <label for="Food-price">Prix:</label>
          <input
            id="Food-price"
            onChange={(e) => setprice(e.target.value)}
          ></input>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => props.AddFood(Food)}>
            Ajouter
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Annuler
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  AddFood: (Food) => dispatch(addFoodToApi(Food)),
});

export default connect(null, mapDispatchToProps)(ModalExample);
