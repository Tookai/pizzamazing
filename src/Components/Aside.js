import React from "react";
import Panier from "./Panier.js";
import Carte from "./Carte";
import "../Style/Aside.css";

function Aside() {
  return (
    <div className="aside">
      <Carte />
      <Panier />
    </div>
  );
}

export default Aside;
