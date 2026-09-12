const content=document.getElementById("input-box");
const generate=document.getElementById("generate-button");

const qrgeneration=()=>{
    if(content.value.trim()=="")
    {
       return showError("Input field should not be empty");
    }
}

const showError=(message)=>{

    const errormsg=document.querySelector(".errordisplay");
    errormsg.classList.add("error");
    errormsg.textContent=message;
}

content.addEventListener("keydown",(event)=>{
    if(event.key=="Enter")
    {
        qrgeneration();
    }
});

