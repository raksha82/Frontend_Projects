
import './Form.css'

function Form()
{
    return <div className="form">
    
    <form className="form-Container"  onSubmit={(e) => e.preventDefault()}>
        <label>Input Box</label>
        <input placeholder="Enter the Title" type="text" ></input>
        <textarea placeholder="Description"></textarea>
        <button >Add Task</button>
    </form>
    </div>
    
}

export default Form;