import React from "react";
import "./Item.css";

const Item = ({
  title,
  price,
  category,
  id,
  currentDate,
  click,
  change,
  color
}) => {
  return (
    <li className="item" data-id={id}>
      <input
        name="title"
        className={`item__title ${title === "" ? "item--danger" : ""}`}
        value={title}
        onChange={change}
      />
      <input
        name="price"
        className={`item__price ${price === "" ? "item--danger" : ""}`}
        value={price}
        onChange={change}
      />
      <p className="item__category">{category}</p>
      <p className="item__date">{currentDate}</p>
      <button
        className="close"
        title="usuń wydatek"
        onClick={click}
        style={{ borderColor: `${color}`, color: `${color}` }}
      >
        x
      </button>
    </li>
  );
};

export default Item;
