import {useEffect, useState} from "react";
import axios from 'axios'
import {useParams} from 'react-router-dom'

const EditTasks = ({setTasks}) => {
    let {id} = useParams()

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
        .put(`${import.meta.env.VITE_BBURL}/${id}`, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          setFormData({
            title: "",
            description: "",
          });
          setTasks(res.data);
          window.location.reload();
        });
    };
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    useEffect(() => {
        axios
        .get(`${import.meta.env.VITE_BBURL}/${id}`).then((res) => {
            setFormData(res.data)
        })
    }, [id])

  return (
<div className="box-container">
<div className="form-container">
  <form onSubmit={handleSubmit}>
    <h3>Edit {formData.title}</h3>
    <div>
      <input
        id="title"
        name="title"
        placeholder="Title"
        type="text"
        value={formData.title}
        onChange={handleChange}
      />
    </div>
    <div>
      <input
        id="description"
        name="description"
        placeholder="Description"
        type="text"
        value={formData.description}
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
  )
}

export default EditTasks
