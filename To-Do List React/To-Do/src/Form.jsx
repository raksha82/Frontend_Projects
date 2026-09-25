import './Form.css'

function Form()
{
    return <div className="form">
    
    <form className="form-Container">
        <label>Input Box</label>
        <input placeholder="Enter the Title" type="text" min={1}></input>
        <textarea type="text" placeholder="Description"></textarea>
        <button>Add Task</button>
    </form>
    </div>
    
}

export default Form;