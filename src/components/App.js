import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Calculator from "./Calculator/Calculator";
import Navigation from "./Navigation/Navigation";
import About from "./About/About";
import Setup from "./Setup/Setup";
import Rating from "./Rating/Rating";
import { saveToStorage } from "../utils";
import { getFromStorage } from "../utils";
import Reviews from "./Reviews/Reviews";

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
    newCategory: "",
    errMsg: ""
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
    saveToStorage("colorTheme", color);
  };
  handleRemoveFromCategories = elem => {
    if (this.state.allCategories.length > 2) {
      const allCategories = this.state.allCategories.filter(
        item => item !== elem
      );
      this.setState({
        allCategories
      });
      saveToStorage("categories", JSON.stringify(allCategories));
    } else {
      this.setState({
        errMsgCategories:
          "Przynajmniej dwie kategorie muszą pozostać wprowadzone "
      });
    }
  };
  handleAddToCategories = () => {
    const { newCategory, allCategories } = this.state;
    if (newCategory.length > 0 && allCategories.length <= 15) {
      const allCategories = [...this.state.allCategories];
      const isTheSameCategory = allCategories.find(
        elem => elem === newCategory
      );
      if (!isTheSameCategory) {
        allCategories.push(newCategory);

        this.setState({
          allCategories,
          newCategory: "",
          errMsgCategories: ""
        });
        saveToStorage("categories", JSON.stringify(allCategories));
      } else {
        this.setState({
          errMsgCategories: "Taka kategoria została już dodana"
        });
      }
    } else if (allCategories.length > 15) {
      this.setState({
        errMsgCategories: "Możesz dodać maksymalnie 15 kategorii"
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
    const colorTheme = getFromStorage("colorTheme");
    const allCategories = getFromStorage("categories");
    if (colorTheme) {
      this.setState({
        colorTheme
      });
    }
    if (allCategories) {
      this.setState({
        allCategories: JSON.parse(allCategories)
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
                    errMsgCategories={this.state.errMsgCategories}
                  />
                )}
              />
              <Route
                path="/Kalkulator-wydatkow-React/ocena"
                render={() => <Rating colorTheme={this.state.colorTheme} />}
              />
              <Route
                path="/Kalkulator-wydatkow-React/opinie"
                component={Reviews}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
