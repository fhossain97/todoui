import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NewTasks = ({ addTask }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  let navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = new FormData();
    newTask.append("title", formData.title);
    newTask.append("description", formData.description);
    console.log(formData);

    axios.post(`${import.meta.env.VITE_BBURL}`, newTask).then((res) => {
      console.log(res, "Res from newTask");
      setFormData(formData);
      addTask(res.data);
      console.log(res.data);
      navigate("/home", { replace: true });
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
              name="title"
              placeholder="Title"
              type="text"
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              id="description"
              name="description"
              placeholder="Description"
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
