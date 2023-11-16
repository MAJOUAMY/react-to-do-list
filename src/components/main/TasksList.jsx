import React, { useEffect, useState } from "react";
import TaskItem from "./TaskItem";
function TasksList({ task, mode }) {
  const [tasks, setTasks] = useState([]);
 
  
  useEffect(() => {
    if (task.trim()!=="") {
      setTasks((prevTasks) => [
        ...prevTasks,
        { id: prevTasks.length, checked: false, task ,expand:false},
        
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
      prevTasks.map((e, i) =>
        e.id === id ? { ...e, expand: !e.expand } : e
      )
    );
  }
 function deleteTask(id){
   
    setTasks(tasks.filter((e)=>e.id != id))
  }
  

  return (
    <div>
      <ul className="tasks">
        {tasks
          .map((item) => (
            <TaskItem
              mode={mode}
              key={item.id}
              item={item}
              toggleCheck={toggleCheck}
              showTask={showTask}
              deleteTask={deleteTask}
             
            />
          ))
          .reverse()}
      </ul>
    </div>
  );
}

export default TasksList;
