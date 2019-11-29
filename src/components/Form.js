import React from "react";
import "./Form.css";

const Form = ({
  change,
  title,
  price,
  click,
  categories,
  select,
  background,
  allCategories
}) => {
  const options = allCategories.map(item => (
    <option key={item} value={item}>
      {item}
    </option>
  ));
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
          {options}
        </select>
      </div>
      <button
        onClick={click}
        className="form__button"
        title="dodaj wydatek"
        style={{ background: `${background}` }}
      >
        +
      </button>
    </form>
  );
};

export default Form;
