import { useState } from "react";
import Task from "./Task";
import NewTasks from "./NewTasks";

const Tasks = ({ tasks, updateTaskState }) => {
  const [task, setTask] = useState([]);

  const deleteTask = (id) => {
    axios.delete(`${import.meta.env.VITE_BBURL}/${id}`,{
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      updateTaskState(id);
      window.location.reload()
    });
  };

  const addToTask = (x) => {
    setTask([...task, x]);
  };

// let {id} = useParams()
// useEffect(()=> {
//   fetch(`${import.meta.env.VITE_BBURL}`)
//   .then((res)=> res.json())
//   .then((data) => setTask(data))
// },[id])


  return (
    <div>
      <NewTasks addTask={addToTask} />
      {tasks.length === 0
        ? "No tasks on board"
        : tasks.map((task) => {
            return <Task key={task._id} deleteTask={deleteTask} task={task} />;
          })}
    </div>
  );
};

export default Tasks;
