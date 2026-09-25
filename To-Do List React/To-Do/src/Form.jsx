function Form()
{
    const formstyle="form-Container";
    return <div>
    <form className={formstyle}>
        <input placeholder="Enter the Title" type="text" min={1}></input>
    </form>
    </div>
    
}

export default Form;