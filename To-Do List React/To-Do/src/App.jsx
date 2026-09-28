import { useState } from 'react'
import './App.css'
import Form from './Form'
import ToDoList from './ToDoList';
import ListItem from './ListItem';

function App() {
  // const [count, setCount] = useState("");

  // // const formInput=()=>{
  // //   setCount(())
  // // }

  return (
    <>
      <Form/>
      <ToDoList/>
    </>
  )
}

export default App
