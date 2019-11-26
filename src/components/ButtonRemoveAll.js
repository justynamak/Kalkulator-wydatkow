import React from "react";
import "./ButtonRemoveAll.css";

const ButtonRemoveAll = ({ click, color }) => {
  return (
    <button
      className="btn-remove"
      onClick={click}
      style={{ color: `${color}`, borderColor: ` ${color}` }}
    >
      Usuń wszystkie
    </button>
  );
};

export default ButtonRemoveAll;
