import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { BiFootball } from "react-icons/bi";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <React.Fragment>
      <header>
        <NavLink exact to="/" className="logo">
          <h2>Quinielafy</h2>
          <BiFootball style={{ fontSize: "30px", margin: "0 5px" }} />
        </NavLink>

        <nav ref={navRef}>
          <NavLink exact to="/" onClick={showNavbar}>
            Inicio
          </NavLink>
          <NavLink exact to="/resultados" onClick={showNavbar}>
            Resultados
          </NavLink>
          <NavLink exact to="/tabla" onClick={showNavbar}>
            Tabla
          </NavLink>
          <NavLink exact to="/reglas" onClick={showNavbar}>
            Reglas
          </NavLink>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </React.Fragment>
  );
};

export default Navbar;
