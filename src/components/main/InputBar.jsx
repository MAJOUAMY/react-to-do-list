import React from "react";
import { FaPlus } from "react-icons/fa";

function InputBar({ handleSubmit, handleChange, value }) {
  return (
    <form className="input-bar">
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
