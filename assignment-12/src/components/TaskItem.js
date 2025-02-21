import { useContext, useCallback } from "react";
import TaskContext from "../context/TaskContext";

const TaskItem = ({ task }) => {
  const { dispatch } = useContext(TaskContext);

  const toggleTask = useCallback(() => {
    dispatch({ type: "TOGGLE_TASK", payload: task.id });
  }, [dispatch, task.id]);

  return (
    <li style={{ textDecoration: task.completed ? "line-through" : "none" }}>
      {task.text}
      <button onClick={toggleTask}>
        {task.completed ? "Undo" : "Complete"}
      </button>
      <button
        onClick={() => dispatch({ type: "REMOVE_TASK", payload: task.id })}
      >
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
