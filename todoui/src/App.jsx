import { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
// import Day from "./components/dates/Day";
import Tasks from './components/tasks/Tasks'
import NewTasks from "./components/tasks/NewTasks";


function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BBURL}`)
      .then((res) => res.json())
      .then((task) => setTasks(task));
  }, []);

  const addTask = (task) => {
    setTasks([...tasks, task])
console.log(task)
  }

  return (
    <Layout>
      <Routes>
        <Route path='/home' element={<NewTasks addTask={addTask}/>} />
        {/* <Route path='/' element={<Tasks tasks={tasks}/>} /> */}
       
      </Routes>
{/* <Day /> */}
{/* <NewTasks addTask={addTask}/>
<Tasks tasks={tasks}/> */}

    </Layout>
  );
}

export default App;
