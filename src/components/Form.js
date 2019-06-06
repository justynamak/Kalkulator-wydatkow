import React from "react";
import "./Form.css";

const Form = ({ change, title, price, click, categories, select }) => {
  return (
    <form action="" className="form">
      <div className="form__field">
        <label htmlFor="name">Nazwa</label>
        <input
          type="text"
          id="name"
          name="title"
          onChange={change}
          value={title}
        />
      </div>
      <div className="form__field">
        <label htmlFor="price">Kwota </label>
        <input
          type="number"
          id="price"
          name="price"
          onChange={change}
          value={price}
        />
      </div>
      <div className="form__field">
        <label htmlFor="categories">Kategoria</label>
        <select
          name="categories"
          id="categories"
          value={categories}
          onChange={select}
        >
          <option value="Żywność">Żywność</option>
          <option value="Opłaty">Opłaty</option>
          <option value="Jedzenie na mieście">Jedzenie na mieście</option>
          <option value="Kredyt">Kredyt</option>
          <option value="Inna">Inna</option>
        </select>
      </div>
      <button onClick={click} className="form__button" title="dodaj wydatek">
        +
      </button>
    </form>
  );
};

export default Form;
