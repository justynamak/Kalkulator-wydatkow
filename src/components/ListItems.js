import React from "react";
import Item from "./Item";
import "./ListItems.css";

const ListItems = ({ allExpenses, click, change, color }) => {
  const expenses = allExpenses.map(expense => (
    <Item
      key={expense.id}
      title={expense.title}
      price={expense.price}
      category={expense.category}
      id={expense.id}
      currentDate={expense.currentDate}
      click={click}
      change={change}
      color={color}
    />
  ));
  return <ul>{expenses}</ul>;
};

export default ListItems;
