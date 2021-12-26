let username=document.querySelector("#username")
let email=document.getElementById("email");
let password=document.getElementById("password");
let form=document.getElementById("form");
let errorMsg=document.getElementsByClassName("error")
let successIcon=document.getElementsByClassName("success-icon")
let failureIcon=document.getElementsByClassName("failure-icon")

form.addEventListener("submit",(e)=>{
    e.preventDefault();
   engine(username,0,"Username cannot be blank");
   engine(email,1,"Email cannot be blank");
   engine(password,2,"Password cannot be blank")
})
let engine=(id,serial,message)=>{
     if(id.value.trim() === ""){
         errorMsg[serial].innerHTML=message;
         id.style.border="2px solid red"
         failureIcon[serial].style.opacity="1";
         successIcon[serial].style.opacity="0";
         errorMsg[serial].style.color="red"
     }
     else{
        errorMsg[serial].innerHTML="";
        id.style.border="2px solid green"
         failureIcon[serial].style.opacity="0";
         successIcon[serial].style.opacity="1";  
     }
}