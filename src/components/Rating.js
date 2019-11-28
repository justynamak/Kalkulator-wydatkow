import React, { Component } from "react";
import "./Rating.css";

class Rating extends Component {
  state = {
    active: ""
  };
  handleClick = e => {
    this.setState({
      active: e.target.id
    });
  };
  handleClickButton = () => {
    if (!this.state.msg) {
      this.setState({
        active: "",
        msg: "Dziękuję za oddanie głosu"
      });
    } else {
      this.setState({
        active: "",
        msgErr: "Twój głos został oddany. Nie możesz zagłosować ponownie."
      });
    }
  };
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
            style={
              this.state.active === "bad" ? { color: `${colorTheme}` } : null
            }
          ></i>
          <i
            className="far fa-meh fa-6x"
            id="neutral"
            onClick={this.handleClick}
            style={
              this.state.active === "neutral"
                ? { color: `${colorTheme}` }
                : null
            }
          ></i>
          <i
            className="far fa-smile fa-6x"
            id="super"
            onClick={this.handleClick}
            style={
              this.state.active === "super" ? { color: `${colorTheme}` } : null
            }
          ></i>
        </div>
        <button
          className="btn"
          style={{ backgroundColor: `${colorTheme}` }}
          onClick={this.handleClickButton}
        >
          Oceniam
        </button>
        {this.state.msg && !this.state.msgErr ? (
          <p className="rating-msg">{this.state.msg}</p>
        ) : null}
        {this.state.msgErr ? (
          <p className="rating-msg">{this.state.msgErr}</p>
        ) : null}
      </>
    );
  }
}

export default Rating;
