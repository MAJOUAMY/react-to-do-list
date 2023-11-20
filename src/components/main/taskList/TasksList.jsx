import React, { useEffect, useState } from "react";
import TaskItem from "../taskItem/TaskItem";
import "./taskList.css";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

function TasksList({ task, mode }) {
  const [tasks, setTasks] = useState([]);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
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

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setTasks((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  return (
    <div>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <ul className="tasks">
          <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
            {tasks.map((item) => (
              <TaskItem
                mode={mode}
                key={item.id}
                item={item}
                toggleCheck={toggleCheck}
                showTask={showTask}
                deleteTask={deleteTask}
              />
            )).reverse()}
          </SortableContext>
        </ul>
      </DndContext>
    </div>
  );
}

export default TasksList;
