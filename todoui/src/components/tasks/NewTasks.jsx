import { useState } from "react";
import axios from "axios";

const NewTasks = ({ addTask }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const tasks = new FormData();
    tasks.append("title", formData.title);
    tasks.append("description", formData.description);
    axios
      .post(`${import.meta.env.VITE_BBURL}/`, tasks, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setFormData({
          title: "",
          description: "",
        });
        addTask(res.data);
        window.location.reload();
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
