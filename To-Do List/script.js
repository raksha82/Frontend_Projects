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
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" onclick="removetask(this)" class="bi bi-x" viewBox="0 0 16 16">
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
        </svg>
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
    list.innerHTML="";
    completed=0;
    uncompleted=0;
    updateCount();
})


function removetask(x)
{
   x.parentElement.remove();
   if(uncompleted>0)
        {
        uncompleted--;
        }

        else
        {
         uncompleted=0;
        }
   updateCount();
}
function taskStatus(checkbox)
{
    let taskText = checkbox.nextElementSibling;

    if (checkbox.checked)
    {
        completed++;
        if(uncompleted>0)
        {
        uncompleted--;
        }

        else
        {
         uncompleted=0;
        }
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