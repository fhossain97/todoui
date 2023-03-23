import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Task = ({ task }) => {
  const [tasks, setTasks] = useState();

  const updateTaskState = (id) => {
    setTasks(tasks.filter((task) => task._id !== id));
  };

  const deleteTask = (id) => {
    axios.delete(`${import.meta.env.VITE_BBURL}/`).then((res) => {
      updateTaskState(id);
      window.location.reload();
    });
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BBURL}/`)
      .then((res) => res.json())
      .then((task) => setTasks(task));
  }, []);

  return (
    <div>
      {task && (
        <div>
          <h1>{task.title}</h1>
          <div>{task.description}</div>

          <button onClick={() => deleteTask(task._id)}>Delete</button>

          <Link to={`/${task._id}`}>
            <button>Edit</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Task;
