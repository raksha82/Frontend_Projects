let task=document.getElementById("task-input");
let error=document.getElementById("errormsg");
let reset=document.getElementById("resetbutton");
function addTask()
{
   let task_value=task.value;

   if(task_value === "")
   {
    showerror("Enter the task");
   }
}

function showerror(msg)
{
   error.style.color="red";
   error.textContent=msg;
}


reset.addEventListener("click",()=>
{
    task.value="";
    error.textContent="";
})