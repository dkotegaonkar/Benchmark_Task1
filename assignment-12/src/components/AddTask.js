import { useState, useContext, useCallback } from "react";
import TaskContext from "../context/TaskContext";

const AddTask = () => {
  const [task, setTask] = useState("");
  const { dispatch } = useContext(TaskContext);

  const addTask = useCallback(() => {
    if (task.trim()) {
      dispatch({ type: "ADD_TASK", payload: task });
      setTask("");
    }
  }, [task, dispatch]);

  return (
    <div>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="New Task..."
      />
      <button onClick={addTask}>Add</button>
    </div>
  );
};

export default AddTask;
