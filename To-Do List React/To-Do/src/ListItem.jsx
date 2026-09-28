import './ListItem.css'

function ListItem({ tasks, deleteTask }) {

  return (
    <table>

      <caption>Task List</caption>

      <thead>
        <tr>
          <th>Task Title</th>
          <th>Description</th>
          <th>Edit / Delete</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>

        {tasks.map((task, index) => (
          <tr key={index}>

            <td>{task.title}</td>

            <td>{task.description}</td>

            <td>
              <button>Edit</button>

              <button onClick={() => deleteTask(index)}>
                Delete
              </button>
            </td>

            <td>
              <input type="checkbox" />
            </td>

          </tr>
        ))}

      </tbody>

    </table>
  );
}

export default ListItem;