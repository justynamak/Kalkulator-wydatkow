import React from "react";
import "./Item.css";

const Item = ({ title, price, category, id, currentDate, click, change }) => {
  return (
    <li className="item" data-id={id}>
      <input
        name="title"
        className={`item__title ${title === "" ? "item--danger" : null}`}
        value={title}
        onChange={change}
      />
      <input
        name="price"
        className={`item__price ${price === "" ? "item--danger" : null}`}
        value={price}
        onChange={change}
      />
      <p className="item__category">{category}</p>
      <p className="item__date">{currentDate}</p>
      <button className="close" title="usuń wydatek" onClick={click}>
        x
      </button>
    </li>
  );
};

export default Item;
