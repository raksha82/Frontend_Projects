import { useState , useEffect} from 'react'
import './App.css'
import Form from './Form'
import ToDoList from './ToDoList';


function App() {
  
  const[task,setTask]=useState(() =>
  {
  const savedTask = localStorage.getItem("tasks");
  return savedTask ? JSON.parse(savedTask) : [];
  });


  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(task));
  }, [task]);

  function addTask(obj){
    setTask([...task,obj]);
  }

  function deleteTask(i){
     setTask(task.filter(task => task.Id !== i));
  }

  function editTask(id) {
   const selectedTask = task.find(t => t.Id === id);

   setTitle(selectedTask.Title);
   setDescription(selectedTask.Description);
   setEditId(id);
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

  function updateTask() {
  setTask(
    task.map((t) =>
      t.Id === editId ? {
            ...t,
            Title: title,
            Description: description
          }
        : t
    )
  );

  setEditId(null);
  setTitle("");
  setDescription("");
}

  return (
    <>
      <h1>To-Do List <img height={20} src='https://img.magnific.com/free-photo/3d-checklist-clipboard-render-illustration_107791-16457.jpg?semt=ais_hybrid&w=740&q=80'></img></h1>
      <Form addTask={addTask} title={title}  setTitle={setTitle}  description={description}  setDescription={setDescription} updateTask={updateTask} editId={editId} />
      <ToDoList task={task} deleteTask={deleteTask} editTask={editTask} checkboxStatus={checkboxStatus}/>
    </>
  )
}

export default App;
