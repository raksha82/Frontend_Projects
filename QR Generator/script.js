const content=document.getElementById("input-box");
let imagecontainer=document.getElementById("image-container");
let errormsg=document.querySelector(".errordisplay");
let successmsg=document.querySelector(".successdisplay");
const download = document.getElementById("Download-button");
const copy=document.getElementById("Copy-button");
let apiurl="";
let imageurl="";

const qrgeneration=()=>{
    errormsg.classList.remove("error");
    successmsg.classList.remove("success");
    imagecontainer.classList.remove("Container-3");
    if(content.value.trim()=="")
    {
       return showError("Input field should not be empty");
    }

    const qrtext=encodeURIComponent(content.value.trim());

     apiurl= `https://quickchart.io/qr?text=${qrtext}`;
    fetch(apiurl)
    .then((response)=>
    {
        console.log(response);
        if(!response.ok)
        {
            // document.getElementById("image-container").style.display="none";
            throw new Error ("check the text or url");
        }
        return response.blob();
    })
    .then((blob)=>
    {
       imageurl=URL.createObjectURL(blob);
        const qrimage=document.getElementById("qr-image");
        qrimage.src=imageurl;
        imagecontainer.classList.add("Container-3");
    })

    .catch((error)=>
    {
        showError(error.message);
    })

}

function ClearEverything(){
    content.value="";
    errormsg.textContent = "";
    successmsg.textContent = "";
    imagecontainer.classList.remove("Container-3");
}

download.addEventListener("click",()=>{
    if(imageurl=="")
    {
        return showError("Please Generate the QR code first")
    }


    const link = document.createElement("a");

    link.href = imageurl;
    link.download = "qr-code.png";

    link.click();


})

    
copy.addEventListener("click" ,()=>
{
    if(imageurl=="")
    {
        return showError("Please Generate the QR code first")
    }
    
    navigator.clipboard.writeText(apiurl)
        .then(() =>
        {
            showsuccess("URL copied successfully");
            
        })
        .catch(() =>
        {
            showError("Failed to copy URL");
        });
   
})

const showError=(message)=>{
    errormsg.classList.add("error");
    errormsg.textContent=message;
    errormsg.style.color="red";
}

const showsuccess=(message)=>
{
    successmsg.classList.add("success");
    successmsg.textContent=message;
    successmsg.style.color="green";
}

content.addEventListener("keydown",(event)=>{
    if(event.key=="Enter")
    {
        qrgeneration();
    }
});

