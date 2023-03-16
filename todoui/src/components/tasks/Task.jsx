import axios from 'axios'
import { Link } from 'react-router-dom';

const Task = ({ task, updateTaskState }) => {
  const deleteTask = (id) => {
    axios.delete(`${import.meta.env.VITE_BBURL}/${id}`,{
      headers: {
        "Content-Type": "application/json",
      },
    }
    ).then((res) => {
      updateTaskState(id);
      window.location.reload()
    });
  };


  
  return (
    <div>
      {task && (
        <div>
          <h1>{task.title}</h1>
          <div>{task.description}</div>
          <Link to={`/${task._id}`}>
          <button onClick={()=> deleteTask(task._id)}>Delete</button></Link>
          
    
        </div>
      )}
    </div>
  );
};

export default Task;
