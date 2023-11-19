import React, { useEffect, useState } from "react";
import TaskItem from "../taskItem/TaskItem";
import "./taskList.css";

function TasksList({ task, mode ,clicked }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (task.trim() !== "") {
      setTasks((prevTasks) => [
        ...prevTasks,
        { id: prevTasks.length, checked: false, task, expand: false },
      ]);
    }
  }, [task]);

  function toggleCheck(id) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  }

  function showTask(id) {
    setTasks((prevTasks) =>
      prevTasks.map((e) => (e.id === id ? { ...e, expand: !e.expand } : e))
    );
  }

  function deleteTask(id) {
    setTasks(tasks.filter((e) => e.id !== id));
  }

  function moveDown(id) {
    const index = tasks.findIndex((task) => task.id === id);
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        { ...updatedTasks[index + 1] },
        { ...updatedTasks[index] },
      ];
      setTasks(updatedTasks);
    }
  }

  function moveUp(id) {
    const index = tasks.findIndex((task) => task.id === id);
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        { ...updatedTasks[index - 1] },
        { ...updatedTasks[index] },
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <div>
      <ul className="tasks">
        {tasks.map((item) => (
          <TaskItem
            mode={mode}
            key={item.id}
            item={item}
            toggleCheck={toggleCheck}
            showTask={showTask}
            deleteTask={deleteTask}
            moveDown={() => moveDown(item.id)}
            moveUp={() => moveUp(item.id)}
            clicked={clicked}
          />
        ))}
      </ul>
    </div>
  );
}

export default TasksList;
