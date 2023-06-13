import React from "react";
import "./home.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div id="home-main">
      <div id="home-content">
        <h1 class="home-element">Bienvenido a quinielafy</h1>
        <h2 class="home-element">
          El lugar donde el futbol se vive como se debe
        </h2>
        <NavLink exact to="/tabla">
          <button class="home-element home-btn">Ir a tabla</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
