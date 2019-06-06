import React, { Component } from "react";
import "./App.css";
import Form from "./Form";
import ListItems from "./ListItems";

class App extends Component {
  state = {
    title: "",
    price: "",
    isActivePanel: false,
    allExpenses: [],
    category: "Żywność"
  };
  handleChangeInput = e => {
    const value =
      e.target.name === "price" ? parseFloat(e.target.value) : e.target.value;
    this.setState({
      [e.target.name]: value
    });
  };
  handleClickButton = e => {
    e.preventDefault();
    if (this.state.price > 0 && this.state.title) {
      let idExpense;
      if (this.state.allExpenses.length) {
        const allId = this.state.allExpenses.map(expense => expense.id);
        console.log(allId);
        idExpense = allId[allId.length - 1] + 1;
      } else {
        idExpense = this.state.allExpenses.length + 1;
      }

      const expense = {
        id: idExpense,
        title: this.state.title,
        price: this.state.price,
        category: this.state.category
      };
      const allExpenses = [...this.state.allExpenses, expense];
      this.setState(prevState => ({
        allExpenses,
        title: "",
        price: "",
        isActivePanel: true
      }));
    }
  };
  handleChangeSelect = e => {
    this.setState({
      category: e.target.value
    });
  };
  handleClickButtonRemove = e => {
    const element = parseFloat(e.target.parentElement.dataset.id);
    const allExpenses = this.state.allExpenses.filter(el => el.id !== element);
    if (!allExpenses.length) {
      this.setState({
        isActivePanel: false
      });
    }
    this.setState({
      allExpenses
    });
  };
  componentDidMount() {
    if (localStorage.getItem("expenses")) {
      const allExpenses = JSON.parse(localStorage.getItem("expenses"));
      this.setState({
        allExpenses,
        isActivePanel: true
      });
    }
  }
  componentDidUpdate() {
    const allExpenses = JSON.stringify(this.state.allExpenses);
    localStorage.setItem("expenses", allExpenses);
  }
  render() {
    const theSumOfExpenses = this.state.allExpenses
      .map(expense => expense.price)
      .reduce((prevVal, currentVal) => prevVal + currentVal, 0)
      .toFixed(2);

    return (
      <>
        <div className="sticky">
          <h1>Kalkulator wydatków</h1>
          <Form
            change={this.handleChangeInput}
            title={this.state.title}
            price={this.state.price}
            click={this.handleClickButton}
            categories={this.state.categories}
            select={this.handleChangeSelect}
          />
          {<p>Razem: {theSumOfExpenses} zł</p>}
        </div>
        <div className="panel">
          {this.state.isActivePanel ? (
            <ListItems
              allExpenses={this.state.allExpenses}
              click={this.handleClickButtonRemove}
            />
          ) : (
            <p>brak wydatków</p>
          )}
        </div>
      </>
    );
  }
}

export default App;
