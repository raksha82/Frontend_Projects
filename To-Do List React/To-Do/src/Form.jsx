import { useState } from "react";
import "./Form.css";

function Form({ addTask }) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newTask = {
      title: title,
      description: description
    };

    addTask(newTask);

    setTitle("");
    setDescription("");
  }

  return (
    <div className="form">

      <form
        className="form-Container"
        onSubmit={handleSubmit}
      >

        <label>Input Box</label>

        <input
          placeholder="Enter the Title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Add Task</button>

      </form>

    </div>
  );
}

export default Form;