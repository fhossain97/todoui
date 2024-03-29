import { useState } from "react";
import Task from "./Task";
import NewTasks from "./NewTasks";
import axios from 'axios'

const Tasks = ({ tasks, updateTaskState }) => {
  const [task, setTask] = useState([]);

  const addToTask = (x) => {
    setTask([...task, x]);
  };

  const deleteTask = () => {
    axios.delete(`${import.meta.env.VITE_BBURL}/`).then((res) => {
      updateTaskState();
      window.location.reload();
    });
  };



  return (
    <div>
      <NewTasks addTask={addToTask} />
      {tasks.length === 0
        ? "No tasks on board"
        : tasks.map((task) => {
            return(
              <Task key={task._id} deleteTask={deleteTask} task={task} />
          
            ) 
          })
          }
    </div>
  );
};

export default Tasks;
