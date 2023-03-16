import { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
// import Day from "./components/dates/Day";
import Tasks from "./components/tasks/Tasks";


function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BBURL}/`)
      .then((res) => res.json())
      .then((task) => setTasks(task));
  }, []);

  const updateTaskState = (id) => {
    setTasks(tasks.filter((task) => task._id !== id))
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Tasks tasks={tasks} updateTaskState={updateTaskState}/>} />
      </Routes>
      {/* <Day /> */}
    </Layout>
  );
}

export default App;
