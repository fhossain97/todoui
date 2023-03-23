import { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
// import Day from "./components/dates/Day";
import Tasks from "./components/tasks/Tasks";
import EditTasks from "./components/tasks/EditTasks";


function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BBURL}/`)
      .then((res) => res.json())
      .then((task) => setTasks(task));
  }, []);

  const updateTaskState = (id) => {
    setTasks(tasks.filter((task) => task._id !== id));
  };

  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={<Tasks tasks={tasks} updateTaskState={updateTaskState} />}
        />
        <Route
          path="/:id"
          element={<EditTasks setTasks={setTasks} />}
        />
      </Routes>
      {/* <Day /> */}
    </Layout>
  );
}

export default App;
