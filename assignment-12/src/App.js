
import './App.css';
import { TaskProvider } from "./context/TaskContext";
import AddTask from "./components/AddTask";
import TaskArray from "./components/TaskArray";

function App() {
  return (
    <TaskProvider>
      <h1>Task Management</h1>
      <AddTask />
      <TaskArray />
    </TaskProvider>
  );
}

export default App;
