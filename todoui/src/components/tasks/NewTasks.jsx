import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NewTasks = ({ addTask }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const tasks = new FormData();
    tasks.append("title", formData.title);
    tasks.append("description", formData.description);
    axios.post(`${import.meta.env.VITE_BBURL}new/`, tasks).then((res) => {
      setFormData({
        title: "",
        description: "",
      });
      addTask(res.data);
      navigate("/", { replace: true });
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
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
          <div>
            {" "}
            <button type="submit">+</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewTasks;
