import React, { useState, useEffect } from "react";
import database from "../firebase";
import "../Style/Pizza.css";
import { useStateValue } from "../StateProvider";

function PizzaRouge({ id, nom, description, prix, image }) {
  {
    /* 
  const [pizzar, setPizzar] = useState([]);

  useEffect(() => {
    database.collection("pizzar").onSnapshot((snapshot) => setPizzar(snapshot.docs.map((doc) => doc.data())));
  }, []);
*/
  }

  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        nom,
        prix,
      },
    });
  };

  return (
    <div>
      <div className="pizzas">
        <div className="pizza" id={id}>
          <img className="pizza__image" src={image} alt={nom} />
          <div className="pizza__texte">
            <p className="pizza__nom">
              {nom} {prix}€
            </p>
            <p className="pizza__description">{description}</p>
            <button onClick={addToBasket} className="pizza__button">
              Ajouter au Panier
            </button>
          </div>
        </div>

        {/*
        {pizzar.map((pizza) => (
          <div className="pizza" key={pizza.id}>
            <img className="pizza__image" src={pizza.image} alt={pizza.nom} />
            <div className="pizza__texte">
              <p className="pizza__nom">
                {pizza.nom} {pizza.prix}€
              </p>
              <p className="pizza__description">{pizza.description}</p>
              <button onClick={addToBasket} className="pizza__button">
                Ajouter au Panier
              </button>
            </div>
          </div>
        ))}

        */}
      </div>
    </div>
  );
}

export default PizzaRouge;
