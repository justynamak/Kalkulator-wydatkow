import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import "../../node_modules/@fortawesome/fontawesome-free/css/all.min.css";

const Navigation = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li>
          <NavLink to="/about" activeClassName="activeItemNav">
            O aplikacji
          </NavLink>
        </li>
        <li>
          <NavLink to="/" activeClassName="activeItemNav" exact>
            Kalkulator wydatków
          </NavLink>
        </li>
        <li>
          <NavLink to="/rating" activeClassName="activeItemNav">
            Oceń aplikację
          </NavLink>
        </li>
        <li>
          <NavLink to="/setup" activeClassName="activeItemNav">
            Ustawienia
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="activeItemNav">
            Kontakt
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
