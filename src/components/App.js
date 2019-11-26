import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Calculator from "./Calculator";
import Navigation from "./Navigation";
import About from "./About";
import Setup from "./Setup";

class App extends Component {
  state = {
    showNav: false,
    colorTheme: "#2bbbad"
  };

  lightenColor(color, percent) {
    var num = parseInt(color.replace("#", ""), 16),
      amt = Math.round(2.55 * percent),
      R = (num >> 16) + amt,
      B = ((num >> 8) & 0x00ff) + amt,
      G = (num & 0x0000ff) + amt;
    return (
      "#" +
      (
        0x1000000 +
        (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
        (B < 255 ? (B < 1 ? 0 : B) : 255) * 0x100 +
        (G < 255 ? (G < 1 ? 0 : G) : 255)
      )
        .toString(16)
        .slice(1)
    );
  }

  saveThemeToStorage = color => {
    // const colorTheme = JSON.stringify(this.state.colorTheme);
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
    const color = e.target.value;
    this.setState({
      colorTheme: color
    });
    this.saveThemeToStorage(color);
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
    const lightenColor = this.lightenColor(this.state.colorTheme, 65);

    const fontawesomeClass = this.state.showNav
      ? "fas fa-arrow-left"
      : "fas fa-bars";
    return (
      <Router>
        <div
          className="container"
          style={{
            backgroundColor: `${lightenColor}`
          }}
        ></div>
        <div className="hamburger" onClick={this.handleToggleNav}>
          <i className={fontawesomeClass}></i>
        </div>
        <div className={classNamesApp.join(" ")}>
          <Navigation colorTheme={this.state.colorTheme} />
          <div
            className="content"
            style={{
              backgroundColor: `${lightenColor}`
            }}
          >
            <Switch>
              <Route
                exact
                path="/Kalkulator-wydatkow-React/"
                render={() => <Calculator colorTheme={this.state.colorTheme} />}
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
                    change={this.handleChangeColorTheme}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
