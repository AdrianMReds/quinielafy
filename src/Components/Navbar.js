import React, { useState } from "react";
// import { FaBars, FaTimes, FaPaintBrush } from "react-icons/fa";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            Quinielafy
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink exact to="/" className="nav-links" onClick={handleClick}>
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/resultados"
                className="nav-links"
                onClick={handleClick}
              >
                Resultados
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/tabla"
                className="nav-links"
                onClick={handleClick}
              >
                Tabla
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                className="nav-links"
                onClick={handleClick}
              >
                Reglas
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* {click ? <FaTimes /> : <FaBars />} */}
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
