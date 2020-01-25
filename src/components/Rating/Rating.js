import React, { Component } from "react";
import "./Rating.css";
import { saveToStorage } from "../../utils";
import { getFromStorage } from "../../utils";

class Rating extends Component {
  state = {
    active: "",
    msg: ""
  };

  handleClick = e => {
    if (!this.state.msg) {
      this.setState({
        active: e.target.id
      });
    }
  };
  handleClickButton = () => {
    if (!this.state.msg) {
      this.setState({
        msg: "Dziękuję za oddanie głosu"
      });
    }
    saveToStorage("rating", this.state.active);
  };
  componentDidMount() {
    const active = getFromStorage("rating");
    if (active) {
      this.setState({
        active,
        msg: "Dziękuję za oddanie głosu"
      });
    }
  }
  render() {
    const { colorTheme } = this.props;
    return (
      <>
        <h2>Oceń aplikację</h2>
        <div className="rating-wrapper">
          <i
            className="far fa-frown fa-6x"
            id="bad"
            onClick={this.handleClick}
            style={this.state.active === "bad" ? { color: "#ff9292" } : null}
          ></i>
          <i
            className="far fa-meh fa-6x"
            id="neutral"
            onClick={this.handleClick}
            style={
              this.state.active === "neutral" ? { color: "#f9ce54" } : null
            }
          ></i>
          <i
            className="far fa-smile fa-6x"
            id="super"
            onClick={this.handleClick}
            style={this.state.active === "super" ? { color: "#52ef8a" } : null}
          ></i>
        </div>
        {this.state.active && !this.state.msg ? (
          <button
            className="btn"
            style={{ backgroundColor: `${colorTheme}` }}
            onClick={this.handleClickButton}
          >
            Oceniam
          </button>
        ) : null}
        {this.state.msg ? <p className="rating-msg">{this.state.msg}</p> : null}
      </>
    );
  }
}

export default Rating;
