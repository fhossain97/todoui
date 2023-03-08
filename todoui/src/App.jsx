import { useState, useEffect } from 'react'
import './App.css'
import Tasks from './components/tasks/Tasks'


function App() {
const [tasks, setTasks] = useState([])

useEffect(()=> {
  fetch('http://localhost:8000/tasks/')
  .then((res) => res.json())
  .then((task) => setTasks(task))
}, [])

  return (
    <div className="App">

<Tasks tasks={tasks}/>
    </div>
  )
}

export default App
