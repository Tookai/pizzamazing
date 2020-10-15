import React, { useState } from "react";
import Modal from "react-modal";
import ProduitsPanier from "./ProduitsPanier";
import "../Style/Panier.css";
import { useStateValue } from "../StateProvider";

Modal.setAppElement("#root");

function Panier() {
  const [{ basket }] = useStateValue();
  const totalPrice = basket.reduce((acc, curr) => acc + curr.prix, 0);

  const [modalIsOpen, setmodalIsOpen] = useState(false);

  return (
    <div className="panier">
      {basket.length === 0 ? (
        <div className="panier__vide">
          <h3 className="panier__titre">Vous n'avez encore rien choisi.</h3>
          <p>Afin de constituer votre panier, cliquez sur le bouton "Ajouter au Panier" à droite de l'image.</p>
        </div>
      ) : (
        <div className="panier__plein">
          <h3 className="panier__titre">Panier : {basket.length}</h3>

          {basket.map((item) => (
            <ProduitsPanier id={item.id} nom={item.nom} prix={item.prix} />
          ))}
          <div className="panier__total">
            <p>Total : </p>
            <p>{totalPrice}€</p>
          </div>

          <button className="panier__commander" onClick={() => setmodalIsOpen(true)}>
            COMMANDER
          </button>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setmodalIsOpen(false)}
            style={{
              overlay: {
                background: "rgba(0, 0, 0, 0)",
              },
              content: {
                width: "450px",
                height: "150px",
                fontSize: "20px",
                margin: "auto",
                textAlign: "center",
                borderRadius: "20px",
              },
            }}
          >
            <p>Pour commander appelez nous au : </p>
            <p>
              <strong className="panier__num">04 01 23 45 67</strong>
            </p>
          </Modal>
        </div>
      )}
    </div>
  );
}

export default Panier;
