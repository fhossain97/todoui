import React from "react";

const Task = ({ task }) => {
  return (
    <div>
      {task && (
        <div>
          <h1>{task.title}</h1>
          <div>{task.description}</div>
          <div>{task.date}</div>
        </div>
      )}
    </div>
  );
};

export default Task;
