import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NewTasks = ({ addTask }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

//   let navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = new FormData();
    newTask.append("title", formData.title);
    newTask.append("description", formData.description);
    console.log(newTask, "newTask");
    console.log(formData, "Form Data");

    axios.post(`${import.meta.env.VITE_BBURL}`, newTask).then((res) => {
        console.log(res, "Res from newTask");
        setFormData(formData);
        addTask(res.data);
        console.log(res.data, "res.data");
        // navigate("/tasks", { replace: true });
      });
  };



  return (
    <div className="box-container">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h3>New Task</h3>
          <div>
            <input
              id="title"
              placeholder="Title"
              name="title"
              type="text"
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              id="description"
              placeholder="Description"
              name="description"
              type="text"
              onChange={handleChange}
            />
          </div>
          <button type="submit">+</button>
        </form>
      </div>
    </div>
  );
};

export default NewTasks;
