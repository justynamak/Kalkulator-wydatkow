import React from "react";
import "./ButtonRemoveAll.css";

const ButtonRemoveAll = ({ click }) => {
  return (
    <button className="btn-remove" onClick={click}>
      Usuń wszystkie
    </button>
  );
};

export default ButtonRemoveAll;
