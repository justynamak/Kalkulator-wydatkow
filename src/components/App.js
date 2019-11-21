import React, { Component } from "react";
import "./App.css";
import Calculator from "./Calculator";
import Navigation from "./Navigation";
import About from "./About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  state = {
    showNav: false
  };
  handleShowNav = () => {
    this.setState({
      showNav: true
    });
  };
  handleCloseMenu = () => {
    this.setState({
      showNav: false
    });
  };
  render() {
    const toggleNav = this.state.showNav ? "showNav" : "hideNav";
    const classNamesApp = ["app", toggleNav];
    const classNamesHamburger = [
      "hamburger",
      `${this.state.showNav ? "hide" : null}`
    ];
    return (
      <Router>
        <div
          className={classNamesHamburger.join(" ")}
          onClick={this.handleShowNav}
        >
          <i className="fas fa-bars"></i>
        </div>
        <div className={classNamesApp.join(" ")}>
          <Navigation />
          <div className="content" onClick={this.handleCloseMenu}>
            <Switch>
              <Route path="/" component={Calculator} exact />
              <Route path="/about" component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
