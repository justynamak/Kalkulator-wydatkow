import React from "react";
import "./Setup.css";

const Setup = ({
  colorTheme,
  click,
  allCategories,
  remove,
  change,
  newCategory,
  add
}) => {
  const categories = allCategories.map(category => (
    <li key={category} onClick={() => remove(category)}>
      {category} <span className="categorie-remove">x</span>
    </li>
  ));
  console.log(change);
  return (
    <>
      <h2>Ustawienia</h2>
      <section>
        <h3>Wybierz kolor motywu</h3>
        <div className="colors-wrapper">
          <div
            className="color color-violet"
            data-name="#8b17ff"
            onClick={click}
            style={colorTheme === "#8b17ff" ? { color: "#fff" } : null}
          >
            <span>
              <i className="fas fa-check"></i>
            </span>
          </div>
          <div
            className="color color-brown"
            data-name="#ab8f8f"
            onClick={click}
            style={colorTheme === "#ab8f8f" ? { color: "#fff" } : null}
          >
            <span>
              <i className="fas fa-check"></i>
            </span>
          </div>
          <div
            className="color color-blue"
            data-name="#008080"
            onClick={click}
            style={colorTheme === "#008080" ? { color: "#fff" } : null}
          >
            <span>
              <i className="fas fa-check"></i>
            </span>
          </div>

          <div
            className="color color-pink"
            data-name="#ae0057"
            onClick={click}
            style={colorTheme === "#ae0057" ? { color: "#fff" } : null}
          >
            <span>
              <i className="fas fa-check"></i>
            </span>
          </div>
        </div>
      </section>
      <section className="categories">
        <h3>Dostosuj kategorie</h3>
        <div className="categories-container">
          <input
            type="text"
            placeholder="wpisz nazwę kategorii"
            value={newCategory}
            onChange={change}
            maxlength="20"
          />
          <button
            className="btn"
            style={{ backgroundColor: colorTheme }}
            onClick={add}
          >
            Dodaj
          </button>
        </div>
        <ul className="categories-setup">{categories}</ul>
      </section>
    </>
  );
};
export default Setup;
