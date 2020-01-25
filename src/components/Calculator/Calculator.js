import React, { Component } from "react";
import { fbase } from "../../fbase";
import "../App.css";
import Form from "../Forms/Form";
import ListItems from "../ListItems/ListItems";
import ButtonRemoveAll from "../ButtonRemoveAll/ButtonRemoveAll";

class Calculator extends Component {
  state = {
    title: "",
    price: "",
    allExpenses: [],
    expense: {},
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
    const { allExpenses, title, category, price } = this.state;
    if (price > 0 && title) {
      let idExpense;
      if (this.state.allExpenses.length) {
        idExpense = this.createExpenseId(allExpenses);
      } else {
        idExpense = 1;
      }
      const date = this.getCurrentDate();

      const expense = {
        id: idExpense,
        title,
        price,
        category,
        currentDate: date
      };
      this.addExpense(expense);
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

    this.setState({
      allExpenses
    });
  };
  handleClickButtonRemoveAll = () => {
    this.setState({
      allExpenses: []
    });
  };

  componentDidMount() {
    this.ref = fbase.syncState("kalkulator-wydatkow/wydatki", {
      context: this,
      state: "allExpenses"
    });
  }
  componentWillUnmount() {
    fbase.removeBinding(this.ref);
  }

  createExpenseId(expenses) {
    return expenses[expenses.length - 1].id + 1;
  }
  getCurrentDate() {
    return new Date().toLocaleString();
  }
  addExpense(expense) {
    const allExpenses = Array.isArray(this.state.allExpenses)
      ? [...this.state.allExpenses, expense]
      : [expense];

    this.setState(prevState => ({
      allExpenses,
      title: "",
      price: ""
    }));
  }
  render() {
    const { allExpenses, title, category, price } = this.state;
    const { colorTheme, lightenColor, allCategories } = this.props;
    const theSumOfExpenses = allExpenses.length
      ? allExpenses
          .map(expense => expense.price !== "" && expense.price)
          .reduce((prevVal, currentVal) => prevVal + currentVal, 0)
          .toFixed(2)
      : 0;

    return (
      <>
        <div className="sticky">
          <h1>Kalkulator wydatków</h1>
          <Form
            change={this.handleChangeInput}
            title={title}
            price={price}
            click={this.handleClickButton}
            categories={category}
            select={this.handleChangeSelect}
            background={colorTheme}
            allCategories={allCategories}
          />
          <div className="sticky__wrapper">
            {
              <p
                style={{
                  color: `${colorTheme}`,
                  fontWeight: "bold"
                }}
              >
                Razem: {theSumOfExpenses} zł
              </p>
            }
            {allExpenses.length > 0 && (
              <ButtonRemoveAll
                click={this.handleClickButtonRemoveAll}
                color={colorTheme}
              />
            )}
          </div>
        </div>
        <div className="panel">
          <div
            className="panel-labels"
            style={{ backgroundColor: lightenColor }}
          >
            <p>Nazwa</p>
            <p>Cena</p>
            <p>Kategoria</p>
            <p>Data dodania</p>
            <div></div>
          </div>

          {allExpenses.length ? (
            <ListItems
              allExpenses={allExpenses}
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
