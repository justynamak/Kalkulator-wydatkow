import React from "react";
import "./ButtonRemoveAll.css";

const ButtonRemoveAll = ({ click, color }) => {
  return (
    <button
      className="btn-remove"
      onClick={click}
      style={{ color: `${color}` }}
      title="Usuń wszystkie"
    >
      <i className="fas fa-trash"></i>
    </button>
  );
};

export default ButtonRemoveAll;
