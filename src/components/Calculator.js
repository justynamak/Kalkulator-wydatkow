import React, { Component } from "react";
import "./App.css";
import Form from "./Form";
import ListItems from "./ListItems";
import ButtonRemoveAll from "./ButtonRemoveAll";

class Calculator extends Component {
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
  handleEditChangeInput = e => {
    const currentId = parseFloat(e.target.parentElement.dataset.id);
    const index = this.state.allExpenses.findIndex(
      expense => expense.id === currentId
    );
    const editExpense = [...this.state.allExpenses][index];

    if (e.target.name === "title") {
      editExpense[e.target.name] = e.target.value;
    } else {
      editExpense[e.target.name] = parseFloat(e.target.value) || "";
    }

    if (e.target.value === "" || parseFloat(e.target.value) < 1) {
      e.target.classList.add("item--danger");
    } else {
      e.target.classList.remove("item--danger");
    }

    const allExpenses = [...this.state.allExpenses];
    allExpenses[index] = editExpense;
    this.setState({
      allExpenses
    });
  };
  handleClickButton = e => {
    e.preventDefault();
    if (this.state.price > 0 && this.state.title) {
      let idExpense;
      if (this.state.allExpenses.length) {
        const allId = this.state.allExpenses.map(expense => expense.id);
        idExpense = allId[allId.length - 1] + 1;
      } else {
        idExpense = this.state.allExpenses.length + 1;
      }
      const date = new Date().toLocaleString();

      const expense = {
        id: idExpense,
        title: this.state.title,
        price: this.state.price,
        category: this.state.category,
        currentDate: date
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
  handleClickButtonRemoveAll = () => {
    this.setState({
      allExpenses: [],
      isActivePanel: false
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
      .map(expense => expense.price !== "" && expense.price)
      .reduce((prevVal, currentVal) => prevVal + currentVal, 0)
      .toFixed(2);

    const { colorTheme } = this.props;

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
            background={colorTheme}
          />
          <div className="sticky__wrapper">
            {<p>Razem: {theSumOfExpenses} zł</p>}
            {this.state.allExpenses.length > 0 && (
              <ButtonRemoveAll
                click={this.handleClickButtonRemoveAll}
                color={colorTheme}
              />
            )}
          </div>
        </div>
        <div className="panel">
          {this.state.isActivePanel ? (
            <ListItems
              allExpenses={this.state.allExpenses}
              click={this.handleClickButtonRemove}
              change={this.handleEditChangeInput}
              color={colorTheme}
            />
          ) : (
            <p>brak wydatków</p>
          )}
        </div>
      </>
    );
  }
}

export default Calculator;
