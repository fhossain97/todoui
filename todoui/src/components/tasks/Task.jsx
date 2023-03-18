import axios from 'axios'
import { Link, useParams } from 'react-router-dom';

const Task = ({ task, updateTaskState }) => {
  let {id} =useParams()
  return (
    <div>
      {task && (
        <div>
          <h1>{task.title}</h1>
          <div>{task.description}</div>
         
          <Link to={`/${task._id}`}><button>Details</button></Link>
        </div>
      )}
    </div>
  );
};

export default Task;
