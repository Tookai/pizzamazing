import React from "react";
import Header from "./Components/Header.js";
import Menu from "./Components/Menu.js";
import Aside from "./Components/Aside";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="main">
        <Menu />
        <Aside />
      </div>
      <Footer />
    </div>
  );
}

export default App;
