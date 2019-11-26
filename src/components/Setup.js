import React from "react";

const Setup = ({ colorTheme, change }) => {
  console.log(colorTheme);
  return (
    <>
      <h2>Ustawienia</h2>
      <form>
        <label>
          Wybierz kolor motywu
          <input type="color" value={colorTheme} onChange={change} />
        </label>
      </form>
    </>
  );
};
export default Setup;
