import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import "../../node_modules/@fortawesome/fontawesome-free/css/all.min.css";

const Navigation = ({ colorTheme, lightenColor }) => {
  return (
    <nav className="nav">
      <ul
        className="nav__list"
        style={{
          backgroundColor: `${colorTheme}`
        }}
      >
        <li>
          <NavLink
            to="/Kalkulator-wydatkow-React/o-aplikacji"
            activeClassName="activeItemNav"
            activeStyle={{ backgroundColor: `${lightenColor}` }}
          >
            O aplikacji
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/Kalkulator-wydatkow-React/"
            activeClassName="activeItemNav"
            activeStyle={{ backgroundColor: `${lightenColor}` }}
          >
            Kalkulator wydatków
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Kalkulator-wydatkow-React/ocena"
            activeClassName="activeItemNav"
            activeStyle={{ color: `${colorTheme}` }}
            activeStyle={{ backgroundColor: `${lightenColor}` }}
          >
            Oceń aplikację
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Kalkulator-wydatkow-React/ustawienia"
            activeClassName="activeItemNav"
            activeStyle={{ color: `${colorTheme}` }}
            activeStyle={{ backgroundColor: `${lightenColor}` }}
          >
            Ustawienia
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Kalkulator-wydatkow-React/kontakt"
            activeClassName="activeItemNav"
            activeStyle={{ color: `${colorTheme}` }}
            activeStyle={{ backgroundColor: `${lightenColor}` }}
          >
            Kontakt
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
