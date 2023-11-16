import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

import { FaRegTrashCan } from "react-icons/fa6";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import "./taskitem.css";

function TaskItem({ item, toggleCheck, mode ,showTask ,deleteTask}) {
  const [menuShow,setMenuShow]=useState(false)
  function toggleMenu(){
    setMenuShow(!menuShow)
  }

  
  return (
    <li className={item.expand ? "list-item-expanded" : "list-item"}>
      <div className={item.expand ? "task-left-expanded" : "task-left"}>
        <label className={item.expand ? "container-expanded" : "container"}>
          <input
            type="checkbox"
            checked={item.checked}
            onChange={() => toggleCheck(item.id)}
          />
          <span className="checkmark"></span>
        </label>

        <p
          className={item.expand ? "task-text-expand" : "task-text"}
          onDoubleClick={() => showTask(item.id)}
        >
          {item.task}
        </p>
      </div>

      <div className={item.expand ? "actions-expand" : "actions"}>
        <AiOutlineArrowDown />
        <AiOutlineArrowUp />
        <BsThreeDotsVertical onClick={toggleMenu} />

        <ul 
        className={mode ? "dropdown-menu" : "dropdown-menu-dark" 
        && menuShow ? "dropdown-menu" : "dropdown-menu-hide"}

        >
          <li onClick={()=>deleteTask(item.id)}>

            <p>delete</p>

            <FaRegTrashCan className="menu-icon" />
          </li>
          {/* <li>
            <p>deleteName</p>
            <FaRegTrashCan className="menu-icon" />
          </li> */}
        </ul>
      </div>
    </li>
  );
}

export default TaskItem;
