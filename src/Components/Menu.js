import React from "react";
import Pizza from "./Pizza.js";
import "../Style/Menu.css";

function Menu() {
  return (
    <div className="menu">
      <h2 className="menu__titre">La Carte :</h2>
      <h4 className="menu__sousTitre">Pizzas sauce tomate 33 cm</h4>
      <div className="pizza__flex">
        <Pizza
          id="00R01"
          nom="Juju"
          prix={10}
          description="emmental, jambon, olives noires"
          image="https://image.flaticon.com/icons/svg/2094/2094661.svg"
        />
        <Pizza
          id="00R02"
          nom="Reine"
          prix={10}
          description="emmental, jambon, champignons, olives noires"
          image="https://image.flaticon.com/icons/svg/2094/2094661.svg"
        />

        <Pizza
          id="00R03"
          nom="Royale"
          prix={11}
          description="emmental, jambon, champignons, oeuf, olives noires"
          image="https://image.flaticon.com/icons/svg/2094/2094661.svg"
        />
        <Pizza
          id="00R04"
          nom="Doudou"
          prix={11}
          description="emmental, jambon chèvre, brie, bleu d'avergne, reblochon, olives noires"
          image="https://image.flaticon.com/icons/svg/2094/2094661.svg"
        />
        <Pizza
          id="00R05"
          nom="Chef"
          prix={11}
          description="emmental, thon, câpres, olives noires"
          image="https://image.flaticon.com/icons/svg/2094/2094661.svg"
        />
        <Pizza
          id="00R06"
          nom="Fermière"
          prix={10}
          description="emmental, lardons, oignons, poivrons, olives noires"
          image="https://image.flaticon.com/icons/svg/2094/2094661.svg"
        />
      </div>
      <h4 className="menu__sousTitre">Pizzas crème fraîche et Spéciales 33 cm</h4>
      <div className="pizza__flex">
        <Pizza
          id="00B01"
          nom="Savoyarde"
          prix={12}
          description="emmental, lardons, reblochon, oignons, pommes de terre, olives noires"
          image="https://image.flaticon.com/icons/svg/2094/2094661.svg"
        />
        <Pizza
          id="00B02"
          nom="Saumon"
          prix={11}
          description="emmental, saumon fumé, olives noires"
          image="https://image.flaticon.com/icons/svg/2094/2094661.svg"
        />
        <Pizza
          id="00B03"
          nom="Paysanne"
          prix={10}
          description="emmental, lardons, oignons, chèvre, olives noires"
          image="https://image.flaticon.com/icons/svg/2094/2094661.svg"
        />
        <Pizza
          id="00B04"
          nom="Chèvre Miel"
          prix={10}
          description="emmental, chèvre, miel de producteur local, olives noires"
          image="https://image.flaticon.com/icons/svg/2094/2094661.svg"
        />
      </div>
    </div>
  );
}

export default Menu;
