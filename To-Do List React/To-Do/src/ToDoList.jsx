
import './ToDoList.css'
function ToDoList({ task , deleteTask  , checkboxStatus}) {

  return (
    <div className='table-container'>
    <table>

      {/* <caption>Task List</caption> */}

      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Description</th>
          <th>Edit / Delete</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>

        {task.map((tasks) => (
          <tr key={tasks.Id}>

            <td style={{
                textDecoration: tasks.Status ? "line-through" : "none",
                color: tasks.Status ? "black" : "white"}}>{tasks.Id}</td>

            <td style={{
                textDecoration: tasks.Status ? "line-through" : "none",
                color: tasks.Status ? "black" : "white"}}>{tasks.Title}</td>

            <td style={{
                textDecoration: tasks.Status ? "line-through" : "none",
                color: tasks.Status ? "black" : "white"}}>{tasks.Description}</td>

            <td>

              <button onClick={() => deleteTask(tasks.Id)}>
                Delete
              </button>
            </td>

            <td className="check">
              <input type="checkbox" 
              onChange={() => checkboxStatus(tasks.Id)}/>
            </td>

          </tr>
        ))}

      </tbody>

    </table>
    </div>
  );
}

export default ToDoList;