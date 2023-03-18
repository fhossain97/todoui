import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'

const TaskView = ({tasks, updateTaskState}) => {

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

let {id} =useParams()
const [task, setTask] = useState()

useEffect(() => {
  fetch(`${import.meta.env.VITE_BBURL}/${id}`)
    .then((res) => res.json())
    .then((task) => setTask(task));
}, [id]);


  return (
    <div>
{task && (
<> 
<h1>{task.title}</h1>
<div>{task.description}</div>
<button onClick={()=> deleteTask(task._id)}>Delete</button>
</>
)
}
    </div>
  )
}


export default TaskView