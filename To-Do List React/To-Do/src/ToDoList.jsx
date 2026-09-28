import ListItem from "./ListItem";

function ToDoList({ tasks, deleteTask }) {

  return (
    <div className="todo-list">

      <h2>Tasks</h2>

      <ListItem
        tasks={tasks}
        deleteTask={deleteTask}
      />

    </div>
  );
}

export default ToDoList;