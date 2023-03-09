import { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Day from "./components/dates/Day";


function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/tasks/")
      .then((res) => res.json())
      .then((task) => setTasks(task));
  }, []);

  return (
    <Layout>
      {/* <Routes>
       
      </Routes> */}
<Day />

    </Layout>
  );
}

export default App;
