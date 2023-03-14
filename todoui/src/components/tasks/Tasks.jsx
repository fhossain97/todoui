import Task from "./Task";

const Tasks = ({ tasks }) => {
  return (
    <div>
      {tasks.length === 0
        ? "No tasks on board"
        : 
          tasks.map((task) => {
            return <Task key={task._id} task={task} />;
          })}
    </div>
  );
};

export default Tasks;
