import React from "react";
import Item from "./Item";
import "./ListItems.css";

const ListItems = ({ allExpenses, click }) => {
  const expenses = allExpenses.map(expense => (
    <Item
      key={expense.id}
      title={expense.title}
      price={expense.price}
      category={expense.category}
      id={expense.id}
      click={click}
    />
  ));
  return <ul>{expenses}</ul>;
};

export default ListItems;
