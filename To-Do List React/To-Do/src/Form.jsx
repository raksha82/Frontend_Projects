import { useState } from "react";
import './Form.css'

function Form({ addTask }){
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  

  const alltask=(e)=>{
    e.preventDefault();

    if(title.trim()==="")
    {
      return setError("Enter the Title");
      
    }

    else if(description.trim()==="")
    {
      return setError("Enter the Description");
      
    }

   
      setError("");
      const obj={
      Id:Date.now(),
      Title:title,
      Description:description,
      Status:false
      }

    addTask(obj);
    setTitle("");
    setDescription("");
    }
    


  return <div className="Container">
    <form onSubmit={alltask} className="form-Container">
      <label>Title:</label>
      <input name="title" value={title}  type="text" placeholder="Enter the title" onChange={(e) =>{setTitle(e.target.value)}}></input>
      <label >Description:</label>
      <textarea placeholder="Enter the Description" value={description} onChange={(e) =>{setDescription(e.target.value)}}></textarea>
      <div className="button-container">
        <button type="submit">Add Task</button>
        <span>{error}</span>
      </div> 
    </form>
  </div>

}


export default Form;