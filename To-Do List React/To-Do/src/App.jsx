import { useState , useEffect} from 'react'
import './App.css'
import Form from './Form'
import ToDoList from './ToDoList';


function App() {
  
  const[task,setTask]=useState(() =>
  {
  const savedTask = localStorage.getItem("tasks_data");
  return savedTask ? JSON.parse(savedTask) : [];
  });


  useEffect(() => {
    localStorage.setItem("tasks_data", JSON.stringify(task));
  }, [task]);

  function addTask(obj){
    setTask([...task,obj]);
  }

  function deleteTask(i){
     setTask(task.filter(task => task.Id !== i));
  }

  function checkboxStatus(id) {
    const updatedTask = task.map((item) => {
      if (item.Id === id) {
        return {
          ...item,
          Status: !item.Status,
        };
      }

      return item;
    });

    setTask(updatedTask);
  }


  return (
    <>
      <h1>To-Do List <img height={20} src='https://img.magnific.com/free-photo/3d-checklist-clipboard-render-illustration_107791-16457.jpg?semt=ais_hybrid&w=740&q=80'></img></h1>
      <Form addTask={addTask} />
      <ToDoList task={task} deleteTask={deleteTask} checkboxStatus={checkboxStatus}/>
    </>
  )
}

export default App;
