import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Calculator from "./Calculator";
import Navigation from "./Navigation";
import About from "./About";
import Setup from "./Setup";
import Rating from "./Rating";

class App extends Component {
  state = {
    showNav: false,
    colorTheme: "#8b17ff",
    allCategories: [
      "Żywność",
      "Opłaty",
      "Jedzenie na mieście",
      "Kredyt",
      "Inna"
    ],
    newCategory: ""
  };
  lightenDarkenColor(col, amt) {
    var usePound = false;
    if (col[0] == "#") {
      col = col.slice(1);
      usePound = true;
    }
    const num = parseInt(col, 16);
    let r = (num >> 16) + amt;
    if (r > 255) r = 255;
    else if (r < 0) r = 0;
    let b = ((num >> 8) & 0x00ff) + amt;

    if (b > 255) b = 255;
    else if (b < 0) b = 0;

    let g = (num & 0x0000ff) + amt;
    if (g > 255) g = 255;
    else if (g < 0) g = 0;

    return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
  }
  saveThemeToStorage = color => {
    localStorage.setItem("colorTheme", color);
  };
  handleToggleNav = () => {
    this.setState({
      showNav: !this.state.showNav
    });
  };
  handleCloseMenu = () => {
    this.setState({
      showNav: false
    });
  };
  handleChangeColorTheme = e => {
    const color = e.currentTarget.dataset.name;

    this.setState({
      colorTheme: color
    });
    this.saveThemeToStorage(color);
  };
  handleRemoveFromCategories = elem => {
    const allCategories = this.state.allCategories.filter(
      item => item !== elem
    );
    this.setState({
      allCategories
    });
  };
  handleAddToCategories = () => {
    if (this.state.newCategory.length > 0) {
      const allCategories = [...this.state.allCategories];
      allCategories.push(this.state.newCategory);

      this.setState({
        allCategories,
        newCategory: ""
      });
    }
  };
  handleChangeInput = e => {
    const newCategory = e.target.value;

    this.setState({
      newCategory
    });
  };

  componentDidMount() {
    if (localStorage.getItem("colorTheme")) {
      const colorTheme = localStorage.getItem("colorTheme");

      this.setState({
        colorTheme
      });
    }
  }
  render() {
    const toggleNav = this.state.showNav ? "showNav" : "hideNav";
    const classNamesApp = ["app", toggleNav];
    const lightenColor = this.lightenDarkenColor(this.state.colorTheme, 45);

    const fontawesomeClass = this.state.showNav
      ? "fas fa-arrow-left"
      : "fas fa-bars";
    return (
      <Router>
        <div className="container"></div>
        <div className="hamburger" onClick={this.handleToggleNav}>
          <i className={fontawesomeClass}></i>
        </div>
        <div className={classNamesApp.join(" ")}>
          <Navigation
            colorTheme={this.state.colorTheme}
            lightenColor={lightenColor}
            click={this.handleCloseMenu}
          />
          <div className="content">
            <Switch>
              <Route
                exact
                path="/Kalkulator-wydatkow-React/"
                render={() => (
                  <Calculator
                    colorTheme={this.state.colorTheme}
                    lightenColor={lightenColor}
                    allCategories={this.state.allCategories}
                  />
                )}
              />
              <Route
                path="/Kalkulator-wydatkow-React/o-aplikacji"
                component={About}
              />
              <Route
                path="/Kalkulator-wydatkow-React/ustawienia"
                render={() => (
                  <Setup
                    colorTheme={this.state.colorTheme}
                    click={this.handleChangeColorTheme}
                    allCategories={this.state.allCategories}
                    remove={this.handleRemoveFromCategories}
                    newCategory={this.state.newCategory}
                    change={this.handleChangeInput}
                    add={this.handleAddToCategories}
                  />
                )}
              />
              <Route
                path="/Kalkulator-wydatkow-React/ocena"
                render={() => <Rating colorTheme={this.state.colorTheme} />}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
