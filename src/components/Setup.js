import React from "react";
import "./Setup.css";

const Setup = ({ colorTheme, change }) => {
  console.log(colorTheme);
  return (
    <>
      <h2>Ustawienia</h2>
      <form>
        <label>
          Wybierz kolor motywu
          {/* <input type="color" value={colorTheme} onChange={change} /> */}
          <div className="colors-wrapper">
            <div
              className="color color-brown"
              data-name="#ab8f8f"
              onClick={change}
              style={colorTheme === "#ab8f8f" ? { color: "#fff" } : null}
            >
              <span>
                <i className="fas fa-check"></i>
              </span>
            </div>
            <div
              className="color color-blue"
              data-name="#008080"
              onClick={change}
              style={colorTheme === "#008080" ? { color: "#fff" } : null}
            >
              <span>
                <i className="fas fa-check"></i>
              </span>
            </div>
            <div
              className="color color-violet"
              data-name="#8b17ff"
              onClick={change}
              style={colorTheme === "#8b17ff" ? { color: "#fff" } : null}
            >
              <span>
                <i className="fas fa-check"></i>
              </span>
            </div>
            <div
              className="color color-pink"
              data-name="#ae0057"
              onClick={change}
              style={colorTheme === "#ae0057" ? { color: "#fff" } : null}
            >
              <span>
                <i className="fas fa-check"></i>
              </span>
            </div>
          </div>
        </label>
      </form>
    </>
  );
};
export default Setup;
