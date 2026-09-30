import { useState } from "react";
import './Form.css'

function Form({ addTask , title , setTitle, description , setDescription , updateTask , editId }){
  const [error, setError] = useState("");

  const alltask=(e)=>{
    e.preventDefault();

    

    if(title.trim()==="")
    {
      setError("Enter the Title");
      return;
    }

    else if(description.trim()==="")
    {
      setError("Enter the Description");
      return ;
    }

    else if (editId !== null) {
    updateTask();
    return;
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
        <h4>{error}</h4>
      </div> 
    </form>
  </div>

}


export default Form;