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
      <label className="item__label" htmlFor="price">
        Nazwa:
      </label>
      <input
        name="title"
        className={`item__title ${title === "" ? "item--danger" : ""}`}
        value={title}
        onChange={change}
        id="price"
      />

      <label className="item__label" htmlFor="price-second">
        Cena:
      </label>
      <input
        name="price"
        className={`item__price ${price === "" ? "item--danger" : ""}`}
        value={price}
        onChange={change}
        id="price-second"
      />

      <p className="item__label">Kategoria:</p>
      <span className="item__category">{category}</span>

      <p className="item__label">Data dodania:</p>
      <span className="item__date">{currentDate}</span>

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
