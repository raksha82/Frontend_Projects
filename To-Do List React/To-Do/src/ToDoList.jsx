import ListItem from "./ListItem";
import './ToDoList.css'
function ToDoList({ tasks, deleteTask }) {

  return (
    <div className="todo-list">


      <ListItem
        tasks={tasks}
        deleteTask={deleteTask}
      />

    </div>
  );
}

export default ToDoList;