import React from "react";
import { useStateValue } from "../StateProvider";
import "../Style/ProduitsPanier.css";

function ProduitsPanier({ id, nom, prix }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id,
    });
  };

  return (
    <div className="panier__rempli">
      <tr className="panier__row" id={id}>
        <td className="panier__nom">{nom}</td>
        <td className="panier__btnrmv">
          <button className="panier__remove" onClick={removeFromBasket}>
            Supprimer
          </button>
        </td>
        <td className="panier__prix">{prix}€</td>
      </tr>
    </div>
  );
}

export default ProduitsPanier;
