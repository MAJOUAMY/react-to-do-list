import React from "react";
import { FaPlus } from "react-icons/fa";

function InputBar({ handleSubmit, handleChange,mode, value }) {
  return (
    <form className={mode ? "input-bar input-bar-light":"input-bar input-bar-dark"}>
      <input
        type="text"
        value={value}
        placeholder="next task"
        onChange={(e) => handleChange(e)}
      />
      <button className="plus-icon" onClick={(e) => handleSubmit(e)}>
        <FaPlus />
      </button>
    </form>
  );
}

export default InputBar;
