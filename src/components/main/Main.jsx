import React, { useState } from "react";
import InputBar from "./taskInput/InputBar";
import TasksList from "./taskList/TasksList";

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
    <div 
    className={mode ? "main" : "main main-dark"}
  
    >
      
      <InputBar
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        value={task}
        mode={mode}
      />
      <TasksList  mode={mode} task={finalTaskValue} />
    </div>
  );
}

export default Main;
