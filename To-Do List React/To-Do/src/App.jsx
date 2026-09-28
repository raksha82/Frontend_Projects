import { useState } from 'react'
import './App.css'
import Form from './Form'
import ToDoList from './ToDoList';
import ListItem from './ListItem';

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    setTasks([...tasks, task]);
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  return (
    <>
      <Form addTask={addTask}/>
      <ToDoList tasks={tasks} deleteTask={deleteTask}/>
    </>
  )
}

export default App
