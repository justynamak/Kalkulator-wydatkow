import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Calculator from "./Calculator";
import Navigation from "./Navigation";
import About from "./About";
import Setup from "./Setup";

class App extends Component {
  state = {
    showNav: false
  };
  handleToggleNav = () => {
    this.setState({
      showNav: !this.state.showNav
    });
  };
  handleCloseMenu = () => {
    this.setState({
      showNav: false,
      colorTheme: "#2bbbad"
    });
  };
  render() {
    const toggleNav = this.state.showNav ? "showNav" : "hideNav";
    const classNamesApp = ["app", toggleNav];

    const fontawesomeClass = this.state.showNav
      ? "fas fa-arrow-left"
      : "fas fa-bars";
    return (
      <Router>
        <div className="hamburger" onClick={this.handleToggleNav}>
          <i className={fontawesomeClass}></i>
        </div>
        <div className={classNamesApp.join(" ")}>
          <Navigation />
          <div className="content">
            <Switch>
              <Route
                path="/Kalkulator-wydatkow-React/"
                render={() => <Calculator colorTheme={this.state.colorTheme} />}
              />
              <Route path="/about" component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
