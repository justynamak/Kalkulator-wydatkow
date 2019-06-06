import React from "react";
import "./Item.css";

const Item = ({ title, price, category, id, click }) => {
  return (
    <li data-id={id}>
      <h2>{title}</h2>
      <p>{price}zł</p>
      <p>{category}</p>
      <button className="close" title="usuń wydatek" onClick={click}>
        x
      </button>
    </li>
  );
};

export default Item;
