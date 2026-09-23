let task=document.getElementById("task-input");
let error=document.getElementById("errormsg");
let reset=document.getElementById("resetbutton");
let success=document.getElementById("successmsg");
let list=document.getElementById("task-container");
let complete=document.getElementById("complete");
let uncomplete=document.getElementById("notcompleted");
var uncompleted=0;
var completed=0;
function addTask()
{
   let task_value=task.value;

   if(task_value.trim() === "")
   {
    showerror("Enter the task");
   }

   else
   {
   success.style.color="green";
   success.textContent=`Task Added Successfully`;
   uncompleted++;  
   list.innerHTML += `
    <div class="task-item">
        <input type="checkbox" onchange="taskStatus(this)">
        <span>${task_value}</span>
    </div>
`;
   updateCount();
   task.value = "";
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
    success.textContent="";
})

function taskStatus(checkbox)
{
    let taskText = checkbox.nextElementSibling;

    if (checkbox.checked)
    {
        completed++;
        uncompleted--;
        taskText.style.textDecoration = "line-through";
        
    }
    else
    {
        completed--;
        uncompleted++;
        taskText.style.textDecoration = "none";
        
    }
    updateCount();
}

function updateCount()
{
    complete.textContent = `Completed ${completed}`;
    uncomplete.textContent = `UnCompleted ${uncompleted}`;
}