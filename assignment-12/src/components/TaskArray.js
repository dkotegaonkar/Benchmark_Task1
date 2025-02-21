import { useContext, useMemo } from "react";
import TaskContext from "../context/TaskContext";
import TaskItem from "./TaskItem";

const TaskArray = () => {
  const { tasks } = useContext(TaskContext);

  const completedTasksCount = useMemo(
    () => tasks.filter((task) => task.completed).length,
    [tasks]
  );

  return (
    <div>
      <h3>
        Tasks ({tasks.length}) - Completed: {completedTasksCount}
      </h3>
      <ul>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskArray;
