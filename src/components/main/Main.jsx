import React, { useState } from "react";
import InputBar from "./InputBar";
import TasksList from "./TasksList";

function Main({ mode }) {
  let [task, setTask] = useState("");
  const [finalTaskValue, setFinalTaskValue] = useState("");
  let handleSubmit = (e) => {
    e.preventDefault();
    setFinalTaskValue(task);
    setTask("");
  };
  let handleChange = (e) => {
    setTask(e.target.value);
  };
  return (
    <div className={mode ? "main" : "main main-dark"}>
      <InputBar
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        value={task}
      />
      <TasksList mode={mode} task={finalTaskValue} />
    </div>
  );
}

export default Main;
