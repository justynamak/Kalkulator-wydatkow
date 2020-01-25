import React, { Component } from "react";
import { API } from "../../utils";
import "./Reviews.css";

class Reviews extends Component {
  state = {};
  getData = () => {
    fetch(API)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject(response);
        }
      })
      .then(data => {
        const comments = data.map(user => (
          <li key={user.id}>
            {user.name} :{" "}
            <span className="user-text">{user.company.catchPhrase}</span>
          </li>
        ));
        this.setState({
          comments
        });
      })
      .catch(error => {
        if (error.status === 404) {
          this.setState({
            errMsg: "Błąd: żądany adres nie istnieje"
          });
        } else {
          this.setState({
            errMsg: "Nie udało się pobrać danych"
          });
        }
      });
  };
  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <section className="reviews">
        <h2>Opinie</h2>
        <ul>{this.state.comments ? this.state.comments : this.state.errMsg}</ul>
        <p>*opinie są pobierane z przykładowego API</p>
      </section>
    );
  }
}
export default Reviews;
