let task=document.getElementById("task-input");
let error=document.getElementById("errormsg");
let reset=document.getElementById("resetbutton");
let success=document.getElementById("successmsg");
let count=0;
function addTask()
{
   let task_value=task.value;

   if(task_value === "")
   {
    showerror("Enter the task");
   }

   count++;
   success.style.color="green";
   success.textContent=`${count} Task Added Successfully`;
   


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