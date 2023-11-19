import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import "./taskitem.css";

function TaskItem({
  item,
  toggleCheck,
  mode,
  showTask,
  deleteTask,
  moveDown,
  moveUp,
  clicked,
}) {
  const [menuShow, setMenuShow] = useState(false);

  function toggleMenu() {
    setMenuShow(!menuShow);
  }
 
  function dropdown(mode, showTask) {
    if (mode && !showTask) {
      return "dropdown-menu-hide";
    } else if (mode && showTask) {
      return "dropdown-menu";
    } else if (!mode && !showTask) {
      return "dropdown-menu-hide";
    } else {
      return "dropdown-menu-dark";
    }
  }
  function handleMouseLeave(){
    setMenuShow(false)
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
        <BsThreeDotsVertical onClick={toggleMenu} />
        <ul 
        onMouseLeave={handleMouseLeave}
        className={dropdown(mode, menuShow)}>
          <li onClick={() => deleteTask(item.id)}>
            <p>delete</p>

            <FaRegTrashCan className="menu-icon" />
          </li>
          <li
            onClick={() => {
              moveDown(item.id);
            }}
          >
            <p>Dwon</p>

            <AiOutlineArrowDown />
          </li>
          <li
            onClick={() => {
              moveUp(item.id);
            }}
          >
            <p>Up</p>

            <AiOutlineArrowUp />
          </li>
          <li
            onClick={()=>{showTask(item.id)}}
          >
            <p>show</p>

            <FaRegEye />
          </li>
        </ul>
      </div>
    </li>
  );
}

export default TaskItem;
