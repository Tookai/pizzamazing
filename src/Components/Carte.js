import React from "react";
import "../Style/Carte.css";

function Carte() {
  return (
    <div className="carte">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.1290774654485!2d3.729972415464167!3d43.7909345791169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b3ff433f77db07%3A0x9654b343ebc1dcc0!2sPlace%20de%20la%20Fontaine%2C%2034380%20Saint-Martin-de-Londres!5e0!3m2!1sfr!2sfr!4v1598025174832!5m2!1sfr!2sfr"
        alt="carte google maps"
      >
        Saint Martin de Londres
      </iframe>
    </div>
  );
}

export default Carte;
