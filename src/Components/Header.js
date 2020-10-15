import React from "react";
import logo from "../img/Logo_pizzamazing.png";
import pizza from "../img/pizza.svg";
import "../Style/Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={logo} alt="Logo" />
      </div>
      {/* 
      <div className="header__nav">
        <span className="header__navRed">
          <img src={pizza} alt="Pizza Rouge" height="50px" />
          <div>Pizzas Rouges</div>
        </span>
        <span className="header__navWhite">
          <img src={pizza} alt="Pizza Blanche" height="50px" />
          <div>Pizzas Blanches</div>
        </span>
      </div>
    */}
    </div>
  );
}

export default Header;
